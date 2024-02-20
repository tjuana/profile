const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define schema for the 'user' collection
const userSchema = new mongoose.Schema({
	username: String,
	email: String,
});

// Create model for the 'User' collection
const User = mongoose.model('User', userSchema);

// Define route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
