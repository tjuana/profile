const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define schema for the 'navigation' collection
const navigationSchema = new mongoose.Schema({
  title: String,
  href: String,
  icon: String
});

// Create model for the 'Navigation' collection
const Navigation = mongoose.model('navigation', navigationSchema);

// GET all navigation items
router.get('/', async (req, res) => {
  try {
    const navigationItems = await Navigation.find();

    const buttons = navigationItems.map(item => ({
      key: item._id,
      title: item.title,
      href: item.href,
    }));

    res.json(buttons);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
