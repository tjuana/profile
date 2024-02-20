const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { createItem, getItemById, updateItemById, deleteItemById } = require('../controllers/crudController');

// Define schema for the 'user' collection
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

// Create model for the 'User' collection
const User = mongoose.model('User', userSchema);

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// POST create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await createItem(User, req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET user by ID
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await getItemById(User, userId);
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PUT update user by ID
router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const updatedUser = await updateItemById(User, userId, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE user by ID
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await deleteItemById(User, userId);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
