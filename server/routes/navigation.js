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

// GET all navigation items
router.get('/', async (req, res) => {
  try {
    const navigationItems = await Navigation.find();
    const navigationObject = navigationItems.reduce((acc, item) => {
      acc[item.title] = item;
      return acc;
    }, {});
    res.json(navigationObject);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
