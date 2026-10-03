const { pool } = require('../config/db');

const VALID_EDUCATION = [
  'Below 8th',
  '8th Pass',
  '9th Pass',
  '10th Pass',
  '12th Pass',
  'Graduate',
  'Post Graduate',
  'Doctorate',
];

const VALID_SOCIAL_CATEGORIES = ['General', 'OBC', 'SC', 'ST', 'EWS'];
const VALID_GENDERS = ['Male', 'Female', 'Transgender', 'Other'];

function validateProfileInput(body) {
  const { age, gender, state, occupation, annual_income, education, social_category } = body;
  const errors = [];

  const parsedAge = Number(age);
  if (
    age === undefined ||
    age === null ||
    age === '' ||
    isNaN(parsedAge) ||
    parsedAge < 0 ||
    parsedAge > 120
  ) {
    errors.push('Valid age is required (0-120).');
  }

  if (!gender || typeof gender !== 'string' || !gender.trim()) {
    errors.push('Gender is required.');
  } else {
    const normGender = gender.trim();
    if (!VALID_GENDERS.some((g) => g.toLowerCase() === normGender.toLowerCase())) {
      errors.push(`Gender must be one of: ${VALID_GENDERS.join(', ')}.`);
    }
  }

  if (!state || typeof state !== 'string' || !state.trim()) {
    errors.push('State is required.');
  }

  if (!occupation || typeof occupation !== 'string' || !occupation.trim()) {
    errors.push('Occupation is required.');
  }

  const parsedIncome = Number(annual_income);
  if (
    annual_income === undefined ||
    annual_income === null ||
    annual_income === '' ||
    isNaN(parsedIncome) ||
    parsedIncome < 0
  ) {
    errors.push('Valid annual income is required.');
  }

  if (!education || typeof education !== 'string' || !education.trim()) {
    errors.push('Education is required.');
  }

  if (social_category && typeof social_category === 'string' && social_category.trim()) {
    const normCategory = social_category.trim();
    if (!VALID_SOCIAL_CATEGORIES.some((c) => c.toLowerCase() === normCategory.toLowerCase())) {
      errors.push(`Social category must be one of: ${VALID_SOCIAL_CATEGORIES.join(', ')}.`);
    }
  }

  return errors;
}

async function upsertProfile(req, res) {
  try {
    const errors = validateProfileInput(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ message: errors[0], errors });
    }

    const { age, gender, state, occupation, annual_income, education, social_category } = req.body;
    const userId = req.user.id;

    const parsedAge = parseInt(age, 10);
    const parsedIncome = parseFloat(annual_income);
    const userGender = String(gender).trim();
    const category = social_category ? String(social_category).trim() : 'General';

    await pool.query(
      `INSERT INTO profiles (user_id, age, gender, state, occupation, annual_income, education, social_category)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         age = VALUES(age),
         gender = VALUES(gender),
         state = VALUES(state),
         occupation = VALUES(occupation),
         annual_income = VALUES(annual_income),
         education = VALUES(education),
         social_category = VALUES(social_category)`,
      [userId, parsedAge, userGender, String(state).trim(), String(occupation).trim(), parsedIncome, String(education).trim(), category]
    );

    const [rows] = await pool.query('SELECT * FROM profiles WHERE user_id = ?', [userId]);

    return res.status(200).json({
      message: 'Profile saved successfully.',
      profile: rows[0],
    });
  } catch (err) {
    console.error('Upsert profile error:', err);
    return res.status(500).json({
      message: err.sqlMessage || 'Server error while saving profile. Ensure database tables are created.',
    });
  }
}

async function getProfile(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM profiles WHERE user_id = ?', [
      req.user.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Profile not found. Please complete your profile.' });
    }

    return res.status(200).json({ profile: rows[0] });
  } catch (err) {
    console.error('Get profile error:', err);
    return res.status(500).json({ message: 'Server error while fetching profile.' });
  }
}

module.exports = { upsertProfile, getProfile, VALID_EDUCATION, VALID_GENDERS };
