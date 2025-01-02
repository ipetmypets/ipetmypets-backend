const express = require('express');
const { getPetsNearby } = require('../controllers/petController');
const router = express.Router();

router.get('/nearby', getPetsNearby);
module.exports = router;