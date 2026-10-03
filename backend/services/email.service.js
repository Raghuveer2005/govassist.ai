const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

let transporter = null;

const TEMPLATES_DIR = path.join(__dirname, '../templates');
const LEGACY_TEMPLATES_PATH = path.join(__dirname, '../data/emailTemplates.json');

/**
 * Replaces all {{key}} placeholder tags with corresponding values in vars.
 */
function renderTemplate(template, vars = {}) {
  if (!template) return '';
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return vars[key] !== undefined && vars[key] !== null ? String(vars[key]) : '';
  });
}

/**
 * Loads the welcome email template directly from backend/templates/.
 * Reads from disk on each invocation so any template edits made by the
 * administrator/owner take effect immediately without requiring a server restart.
 */
function loadWelcomeTemplate() {
  try {
    const htmlPath = path.join(TEMPLATES_DIR, 'welcome.html');
    const txtPath = path.join(TEMPLATES_DIR, 'welcome.txt');
    const configPath = path.join(TEMPLATES_DIR, 'welcome.config.json');

    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      const text = fs.existsSync(txtPath) ? fs.readFileSync(txtPath, 'utf8') : '';
      let subject = 'Welcome to GovAssist AI! 🎉';
      let appName = 'GovAssist AI';

      if (fs.existsSync(configPath)) {
        try {
          const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));
          if (cfg.subject) subject = cfg.subject;
          if (cfg.appName) appName = cfg.appName;
        } catch (e) {
          console.warn('Could not parse welcome.config.json:', e.message);
        }
      }

      return { subject, html, text, appName };
    }
  } catch (err) {
    console.warn('Could not load templates from backend/templates/ directory:', err.message);
  }

  // Fallback to legacy emailTemplates.json if present
  try {
    if (fs.existsSync(LEGACY_TEMPLATES_PATH)) {
      const raw = fs.readFileSync(LEGACY_TEMPLATES_PATH, 'utf8');
      const templates = JSON.parse(raw);
      if (templates.welcome) {
        return {
          subject: templates.welcome.subject || 'Welcome to GovAssist AI',
          html: templates.welcome.html || '',
          text: templates.welcome.text || '',
          appName: 'GovAssist AI',
        };
      }
    }
  } catch (err) {
    console.warn('Could not read fallback emailTemplates.json:', err.message);
  }

  return null;
}

/**
 * Creates and returns a reusable Nodemailer transporter.
 * Supports:
 *  1. Custom SMTP host/port (SendGrid, Mailgun, Brevo, AWS SES, etc.)
 *  2. Gmail (using 16-character Google App Password)
 *  3. Automatic Ethereal test inbox fallback in development (free sandbox)
 */
async function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const service = process.env.EMAIL_SERVICE;

  if (host && user && pass) {
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
    console.log(`📧 Configured custom SMTP transporter (${host}:${port})`);
  } else if (user && pass) {
    transporter = nodemailer.createTransport({
      service: service || 'gmail',
      auth: { user, pass },
    });
    console.log(`📧 Configured email transporter using ${service || 'gmail'} for ${user}`);
  } else {
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log('📧 No SMTP credentials configured. Using Ethereal Email test inbox for development.');
    } catch (err) {
      console.warn('⚠️ Could not initialize test email transporter:', err.message);
    }
  }

  return transporter;
}

/**
 * Sends an automated welcome email to a newly registered user.
 * 
 * @param {string} toEmail - Recipient email address
 * @param {string} name - Recipient full name
 * @returns {Promise<{success: boolean, messageId?: string, previewUrl?: string, error?: string}>}
 */
async function sendWelcomeEmail(toEmail, name = '') {
  if (!toEmail) {
    console.warn('⚠️ sendWelcomeEmail called without recipient email.');
    return { success: false, error: 'Recipient email is required.' };
  }

  try {
    const mailer = await getTransporter();
    if (!mailer) {
      console.warn('⚠️ Email transporter not available. Skipping welcome email.');
      return { success: false, error: 'Transporter not available.' };
    }

    const template = loadWelcomeTemplate();
    if (!template) {
      console.warn('⚠️ Welcome email template not found. Skipping welcome email.');
      return { success: false, error: 'Template not found.' };
    }

    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const firstName = name ? name.trim().split(' ')[0] : 'there';
    const appName = template.appName || 'GovAssist AI';

    const vars = {
      firstName,
      name: name || 'there',
      email: toEmail,
      clientUrl,
      dashboardUrl: `${clientUrl}/dashboard`,
      profileUrl: `${clientUrl}/profile`,
      appName,
      year: new Date().getFullYear(),
    };

    const senderUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const fromAddress = process.env.EMAIL_FROM || (senderUser ? `"${appName}" <${senderUser}>` : `"${appName}" <no-reply@govassist.ai>`);
    const renderedSubject = renderTemplate(template.subject, vars);
    const renderedHtml = renderTemplate(template.html, vars);
    const renderedText = renderTemplate(template.text, vars);

    const info = await mailer.sendMail({
      from: fromAddress,
      to: toEmail,
      subject: renderedSubject,
      html: renderedHtml,
      text: renderedText,
    });

    console.log(`✉️ Automated welcome email sent to ${toEmail} (Message ID: ${info.messageId})`);

    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`🔗 Preview Sent Email in browser: ${previewUrl}`);
    }

    return {
      success: true,
      messageId: info.messageId,
      previewUrl: previewUrl || null,
    };
  } catch (err) {
    console.error(`❌ Failed to send welcome email to ${toEmail}:`, err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}

module.exports = {
  sendWelcomeEmail,
  getTransporter,
  loadWelcomeTemplate,
  renderTemplate,
};
