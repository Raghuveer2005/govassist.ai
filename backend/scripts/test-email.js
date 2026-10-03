require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const { sendWelcomeEmail, loadWelcomeTemplate } = require('../services/email.service');

async function main() {
  const args = process.argv.slice(2);
  const targetEmail = args[0] || process.env.EMAIL_USER || 'test.citizen@example.com';
  const targetName = args[1] || 'GovAssist Tester';

  console.log('==============================================');
  console.log('  GovAssist AI — Automated Welcome Email Test ');
  console.log('==============================================\n');

  console.log(`📋 Target Recipient: ${targetEmail}`);
  console.log(`👤 Recipient Name:   ${targetName}`);

  const template = loadWelcomeTemplate();
  if (template) {
    console.log(`📄 Template Subject: "${template.subject}"`);
    console.log(`🏢 Application Name: "${template.appName}"`);
    console.log(`📐 HTML Length:      ${template.html.length} chars`);
    console.log(`📝 Plain-text:       ${template.text.length} chars\n`);
  } else {
    console.warn('⚠️ Warning: No template found in backend/templates/ or fallback.\n');
  }

  console.log('🚀 Sending test email...');
  const result = await sendWelcomeEmail(targetEmail, targetName);

  console.log('\n----------------------------------------------');
  if (result.success) {
    console.log('✅ Success: Automated welcome email was sent successfully!');
    console.log(`📨 Message ID: ${result.messageId}`);
    if (result.previewUrl) {
      console.log(`\n🔗 Live Browser Preview: ${result.previewUrl}`);
      console.log('   (Open this URL in your browser to view the rendered email)');
    }
  } else {
    console.error('❌ Error sending email:', result.error);
  }
  console.log('----------------------------------------------\n');
}

main().catch((err) => {
  console.error('Unexpected error during email test:', err);
  process.exit(1);
});
