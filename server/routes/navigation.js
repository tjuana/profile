const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { createItem, getItemById, updateItemById, deleteItemById } = require('../controllers/crudController');

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
    res.json(navigationItems);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
