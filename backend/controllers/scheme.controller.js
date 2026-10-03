const { pool } = require('../config/db');
const { filterEligibleSchemes, isEligible } = require('../utils/eligibility');
const { explainMatch, simplifyDescription } = require('../services/gemini.service');
const SCHEMES_DATA = require('../data/schemesData');

/**
 * Ensures all 50 schemes are present in MySQL. If empty or missing, populates them automatically.
 */
async function ensureSchemesPopulated() {
  try {
    // Ensure application_url column exists
    try {
      const [colRows] = await pool.query("SHOW COLUMNS FROM schemes LIKE 'application_url'");
      if (colRows.length === 0) {
        await pool.query("ALTER TABLE schemes ADD COLUMN application_url VARCHAR(500) DEFAULT '' AFTER eligibility_criteria");
      }
    } catch (colErr) {
      console.warn("Could not check/add application_url column:", colErr.message);
    }

    const [countRows] = await pool.query('SELECT COUNT(*) as total FROM schemes');
    const count = countRows[0]?.total || 0;

    let needsSync = count < SCHEMES_DATA.length;
    if (!needsSync && count > 0) {
      const [sampleRows] = await pool.query('SELECT eligibility_criteria FROM schemes LIMIT 1');
      const sampleCriteria = typeof sampleRows[0]?.eligibility_criteria === 'string'
        ? JSON.parse(sampleRows[0]?.eligibility_criteria || '{}')
        : sampleRows[0]?.eligibility_criteria;
      if (!sampleCriteria || !sampleCriteria.genders) {
        needsSync = true;
      }
    }

    if (needsSync) {
      console.log(`🔄 Syncing schemes table (found ${count}/${SCHEMES_DATA.length}, updating criteria with gender segments)...`);
      
      // Clean and repopulate to ensure accurate IDs and data
      await pool.query('DELETE FROM schemes');
      await pool.query('ALTER TABLE schemes AUTO_INCREMENT = 1');

      for (const scheme of SCHEMES_DATA) {
        await pool.query(
          'INSERT INTO schemes (scheme_name, description, category, eligibility_criteria, application_url) VALUES (?, ?, ?, ?, ?)',
          [
            scheme.scheme_name,
            scheme.description,
            scheme.category,
            JSON.stringify(scheme.eligibility_criteria),
            scheme.application_url || '',
          ]
        );
      }
      console.log(`✅ Successfully seeded all ${SCHEMES_DATA.length} government schemes with gender criteria into MySQL!`);
    }
  } catch (err) {
    console.error('Auto-seed check error:', err.message);
  }
}

/**
 * GET /api/schemes
 * Returns all schemes (no filtering) - used for browsing.
 */
async function getAllSchemes(req, res) {
  try {
    await ensureSchemesPopulated();
    const [rows] = await pool.query('SELECT * FROM schemes ORDER BY id ASC');
    return res.status(200).json({
      schemes: rows.length > 0 ? rows : SCHEMES_DATA.map((s, i) => ({ id: i + 1, ...s })),
    });
  } catch (err) {
    console.error('Get all schemes error:', err);
    return res.status(500).json({ message: 'Server error while fetching schemes.' });
  }
}

/**
 * GET /api/recommendations
 * Core flow:
 *  1. Fetch user's profile from MySQL
 *  2. Fetch all 50 schemes from MySQL
 *  3. Run deterministic backend eligibility filtering (utils/eligibility.js)
 *  4. Return only matching schemes
 */
async function getRecommendations(req, res) {
  try {
    const userId = req.user.id;

    const [profileRows] = await pool.query('SELECT * FROM profiles WHERE user_id = ?', [
      userId,
    ]);
    if (profileRows.length === 0) {
      return res.status(400).json({
        message: 'Please complete your profile before viewing recommendations.',
      });
    }
    const profile = profileRows[0];

    // Ensure schemes table is populated with all 50 schemes
    await ensureSchemesPopulated();

    let [schemeRows] = await pool.query('SELECT * FROM schemes ORDER BY id ASC');

    if (!schemeRows || schemeRows.length === 0) {
      schemeRows = SCHEMES_DATA.map((s, i) => ({ id: i + 1, ...s }));
    }

    const matchedSchemes = filterEligibleSchemes(profile, schemeRows);

    return res.status(200).json({
      count: matchedSchemes.length,
      schemes: matchedSchemes,
    });
  } catch (err) {
    console.error('Get recommendations error:', err);
    return res.status(500).json({ message: 'Server error while generating recommendations.' });
  }
}

/**
 * POST /api/schemes/:id/explain
 * Uses Gemini to explain WHY an eligible scheme matches the logged-in user.
 * Eligibility is re-verified via backend logic before calling Gemini.
 */
async function explainScheme(req, res) {
  try {
    const userId = req.user.id;
    const schemeId = req.params.id;

    const [profileRows] = await pool.query('SELECT * FROM profiles WHERE user_id = ?', [
      userId,
    ]);
    if (profileRows.length === 0) {
      return res.status(400).json({ message: 'Please complete your profile first.' });
    }

    const [schemeRows] = await pool.query('SELECT * FROM schemes WHERE id = ?', [schemeId]);
    let scheme;
    if (schemeRows.length === 0) {
      scheme = SCHEMES_DATA[Number(schemeId) - 1];
    } else {
      scheme = schemeRows[0];
    }

    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found.' });
    }

    const profile = profileRows[0];

    if (!isEligible(profile, scheme.eligibility_criteria)) {
      return res.status(403).json({
        message: 'You are not eligible for this scheme based on backend rules.',
      });
    }

    const explanation = await explainMatch(profile, scheme);

    return res.status(200).json({ schemeId: scheme.id || schemeId, explanation });
  } catch (err) {
    console.error('Explain scheme error:', err);
    return res.status(500).json({ message: err.message || 'Failed to generate explanation.' });
  }
}

/**
 * POST /api/schemes/:id/simplify
 * Uses Gemini to simplify a scheme's description into plain English.
 */
async function simplifyScheme(req, res) {
  try {
    const schemeId = req.params.id;
    const [schemeRows] = await pool.query('SELECT * FROM schemes WHERE id = ?', [schemeId]);
    let scheme = schemeRows[0];
    if (!scheme) {
      scheme = SCHEMES_DATA[Number(schemeId) - 1];
    }

    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found.' });
    }

    const simplified = await simplifyDescription(scheme);

    return res.status(200).json({ schemeId: scheme.id || schemeId, simplified });
  } catch (err) {
    console.error('Simplify scheme error:', err);
    return res.status(500).json({ message: err.message || 'Failed to simplify description.' });
  }
}

module.exports = {
  getAllSchemes,
  getRecommendations,
  explainScheme,
  simplifyScheme,
};
