const fetch = require('node-fetch');
require('dotenv').config();

const PRIMARY_MODEL = process.env.GEMINI_MODEL || 'gemini-flash-latest';
const FALLBACK_MODELS = [PRIMARY_MODEL, 'gemini-flash-latest', 'gemini-3.5-flash', 'gemini-3.6-flash', 'gemini-3.5-flash-lite'];

const GEMINI_URL = (model, apiKey) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

/**
 * IMPORTANT:
 * Gemini is used ONLY for two things:
 *   1. Explaining, in plain English, WHY an already-eligible scheme matches a user.
 *   2. Simplifying a scheme's official description into plain English.
 * Gemini NEVER decides eligibility — that is 100% backend rule-based logic
 * (see utils/eligibility.js). The profile + scheme passed here have already
 * been confirmed eligible/relevant before this service is called.
 */

async function callGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    throw new Error('GEMINI_API_KEY is not configured in backend/.env.');
  }

  // Deduplicate model candidates
  const modelsToTry = [...new Set(FALLBACK_MODELS)];
  let lastError = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch(GEMINI_URL(model, apiKey), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 2048,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text =
          data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
          'No explanation could be generated at this time.';
        return text;
      }

      const errText = await response.text();
      let parsedMsg = errText;
      try {
        const errJson = JSON.parse(errText);
        parsedMsg = errJson.error?.message || errText;
      } catch {}
      lastError = new Error(`Gemini API (${model} - ${response.status}): ${parsedMsg}`);
      console.warn(`Model ${model} failed (${response.status}), trying fallback...`);
    } catch (fetchErr) {
      lastError = fetchErr;
      console.warn(`Network error with model ${model}:`, fetchErr.message);
    }
  }

  throw lastError || new Error('All Gemini model fallbacks failed.');
}

/**
 * Explains why an already-eligible scheme matches the user's profile.
 */
async function explainMatch(profile, scheme) {
  const prompt = `You are a helpful assistant for a government schemes portal in India.
A user has ALREADY been determined eligible for the scheme below by backend rules.
Your ONLY job is to explain, in 2-3 short, friendly plain-English sentences, WHY this
scheme is relevant to them based on their profile. Do not re-evaluate eligibility,
do not mention JSON, and do not use technical jargon.

User Profile:
- Age: ${profile.age}
- Gender: ${profile.gender || 'Not specified'}
- State: ${profile.state}
- Occupation: ${profile.occupation}
- Annual Income: ₹${profile.annual_income}
- Education: ${profile.education}
- Social Category: ${profile.social_category || 'General'}

Scheme:
- Name: ${scheme.scheme_name}
- Category: ${scheme.category}
- Description: ${scheme.description}

Write a short, warm explanation of why this scheme suits this person.`;

  return callGemini(prompt);
}

/**
 * Simplifies an official scheme description into plain, easy English.
 */
async function simplifyDescription(scheme) {
  const prompt = `Rewrite the following Indian government scheme description in simple,
plain English that anyone can understand, in 2-3 short sentences. Avoid bureaucratic
jargon. Do not add new facts or change the meaning.

Scheme Name: ${scheme.scheme_name}
Official Description: ${scheme.description}`;

  return callGemini(prompt);
}

module.exports = { explainMatch, simplifyDescription };
