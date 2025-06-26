const mongoose = require('mongoose');

// Schema for journal entries
const entrySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Entry', entrySchema);