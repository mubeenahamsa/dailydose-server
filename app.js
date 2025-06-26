// Load environment variables
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const entriesRouter = require('./routes/entries');

// Initialize Express app
const app = express();

const allowedOrigins = ['https://dailydose-fe.vercel.app', 'http://localhost:5173'];
// Middleware
// const cors = require('cors');
app.use(cors({ origin:allowedOrigins, credentials:true })); // Enable cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/entries', entriesRouter);

// Test route
app.get('/api/test', (req, res) => {
  res.send('Backend is working!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));