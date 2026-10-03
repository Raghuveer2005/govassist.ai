const express = require('express');
const router = express.Router();
const { upsertProfile, getProfile } = require('../controllers/profile.controller');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, getProfile);
router.post('/', authenticate, upsertProfile);
router.put('/', authenticate, upsertProfile);

module.exports = router;
