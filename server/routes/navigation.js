const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define schema for the 'navigation' collection
const navigationSchema = new mongoose.Schema({
  title: String,
  href: String,
});

// Create model for the 'Navigation' collection
const Navigation = mongoose.model('navigation', navigationSchema);

// Define route to get navigation by ID
router.get('/:navigationId', async (req, res) => {
  const navigationId = req.params.navigationId;

  try {
    const navigation = await Navigation.findById(navigationId);
    res.json(navigation);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;