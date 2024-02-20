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

// POST create a new navigation item
router.post('/', async (req, res) => {
  try {
    const newNavigationItem = await createItem(Navigation, req.body);
    res.json(newNavigationItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET navigation item by ID
router.get('/:navigationId', async (req, res) => {
  const navigationId = req.params.navigationId;

  try {
    const navigationItem = await getItemById(Navigation, navigationId);
    res.json(navigationItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT update navigation item by ID
router.put('/:navigationId', async (req, res) => {
  const navigationId = req.params.navigationId;

  try {
    const updatedNavigationItem = await updateItemById(Navigation, navigationId, req.body);
    res.json(updatedNavigationItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE navigation item by ID
router.delete('/:navigationId', async (req, res) => {
  const navigationId = req.params.navigationId;

  try {
    const result = await deleteItemById(Navigation, navigationId);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
