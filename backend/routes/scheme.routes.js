const express = require('express');
const router = express.Router();
const {
  getAllSchemes,
  getRecommendations,
  explainScheme,
  simplifyScheme,
} = require('../controllers/scheme.controller');
const authenticate = require('../middleware/auth');

// Browse all schemes (no auth required — public catalog)
router.get('/schemes', getAllSchemes);

// Personalized recommendations (backend eligibility filtering, no AI)
router.get('/recommendations', authenticate, getRecommendations);

// Gemini-powered explanation for why a scheme matches the user
router.post('/schemes/:id/explain', authenticate, explainScheme);

// Gemini-powered plain-English simplification of a scheme description
router.post('/schemes/:id/simplify', simplifyScheme);

module.exports = router;
