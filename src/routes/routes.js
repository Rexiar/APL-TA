const express = require('express');
const { getExample } = require('../controllers/controllers');

const router = express.Router();

router.get('/examples', getExample);

module.exports = router;
