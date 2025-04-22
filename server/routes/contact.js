const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit a contact form message
// @access  Public
router.post('/', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    
    console.log('Saved contact:', savedContact);
    res.json({ success: true, message: 'Message sent successfully' });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending message',
      error: error.message 
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact messages
// @access  Public
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

module.exports = router; 