const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const shortenRoute = require('./routes/shorten');
const updateRoute = require('./routes/update');
const redirectRoute = require('./routes/redirect');
const updateExpiryRoute = require('./routes/updateExpiry');
const url = require('./routes/url');
const errorHandler = require('./middleware/errorHandler');
require('./config/database');

// Load environment variables from .env file
dotenv.config();

app.use(cors());

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware for handling errors
app.use(errorHandler);

// Default route
app.get('/', (req, res) => {
  res.send(`
  <div align="center">
    <h1>Welcome to the URL Shortener API.</h1>

  </div>
  `);
});

// Route handlers
app.use('/', shortenRoute);
app.use('/', updateRoute);
app.use('/', redirectRoute);
app.use('/', updateExpiryRoute);
app.use('/', url);

// Server configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running ${process.env.NODE_ENV === 'development' ? 'in development' : 'in production'} mode on port http://localhost:${PORT}`);
});