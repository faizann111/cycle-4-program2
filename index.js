const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Import your router
const router = require('./route/bookRoute');
app.use('/books', router);

// Quick test route
app.get('/ping', (req, res) => {
  res.send('Server is alive!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

