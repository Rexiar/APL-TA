const express = require('express');
const router = express.Router();

// Define a route to render the home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

module.exports = router;
