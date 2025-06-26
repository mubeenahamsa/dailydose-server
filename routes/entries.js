const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// Get all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new entry
router.post('/', async (req, res) => {
  const entry = new Entry({
    text: req.body.text,
    mood: req.body.mood,
  });

  try {
    const newEntry = await entry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;