const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { createItem, getItemById, updateItemById, deleteItemById } = require('../controllers/crudController');

// Define schema for the 'page' collection
const pageSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Create model for the 'Page' collection
const Page = mongoose.model('Page', pageSchema);

// GET all pages
router.get('/', async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST create a new page
router.post('/', async (req, res) => {
  try {
    const newPage = await createItem(Page, req.body);
    res.json(newPage);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET page by ID
router.get('/:pageId', async (req, res) => {
  const pageId = req.params.pageId;

  try {
    const page = await getItemById(Page, pageId);
    res.json(page);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT update page by ID
router.put('/:pageId', async (req, res) => {
  const pageId = req.params.pageId;

  try {
    const updatedPage = await updateItemById(Page, pageId, req.body);
    res.json(updatedPage);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE page by ID
router.delete('/:pageId', async (req, res) => {
  const pageId = req.params.pageId;

  try {
    const result = await deleteItemById(Page, pageId);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
