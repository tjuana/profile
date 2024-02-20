// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.js');
const pageRouter = require('./routes/page.js');
const navigationRouter = require('./routes/navigation.js');

// Create Express application
const app = express();

// Connect to MongoDB using Mongoose
const mongoDBURI = 'mongodb+srv://boo:foo@profile.ed8hfat.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDBURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
});

// Use routes for users and pages
app.use('/users', userRouter);
app.use('/api/pages', pageRouter);
app.use('/api/navigation', navigationRouter);

// Set the port for the Express app to listen on
const port = 4242;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
