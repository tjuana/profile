const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');  // Import express-handlebars
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const userRouter = require('./routes/user.js');
const pageRouter = require('./routes/page.js');
const navigationRouter = require('./routes/navigation.js');

const app = express();
// Serve static files
app.use(express.static('public'));

// Use routes for users and pages
app.use('/users', userRouter);
app.use('/api/pages', pageRouter);
app.use('/api/navigation', navigationRouter);

// Set up a proxy for Next.js don't work
app.use('/_next', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

// Set up Handlebars as the view engine
app.engine( 'handlebars', exphbs.engine({
  defaultLayout: 'main'
  })) // Use the 'create' function
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Connect to MongoDB using Mongoose
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
});

// Render a Handlebars template
app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'My Express App' });
});

const port = 4242;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
