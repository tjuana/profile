const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const userRouter = require('./routes/user.js');
const pageRouter = require('./routes/page.js');
const navigationRouter = require('./routes/navigation.js');

const app = express();

// Connect to MongoDB using Mongoose
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
});

// Use Handlebars as the view engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Use routes for users and pages
app.use('/users', userRouter);
app.use('/api/pages', pageRouter);
app.use('/api/navigation', navigationRouter);

// Define a route to render the Handlebars template
app.get('/', (req, res) => {
  res.render('index');
});

const port = 4242;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
