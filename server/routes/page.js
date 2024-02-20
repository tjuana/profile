const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define schema for the 'page' collection
const pageSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Create model for the 'Page' collection
const Page = mongoose.model('Page', pageSchema);

// Define route to get page by ID
router.get('/:pageId', async (req, res) => {
  const pageId = req.params.pageId;

  try {
    const page = await Page.findById(pageId);
    res.json(page);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
