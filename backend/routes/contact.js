const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('phone').matches(/^[0-9]{10,11}$/).withMessage('Enter a valid phone number'),
  body('email').isEmail().withMessage('Enter a valid email').normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 1000 })
];

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// GET /api/contact - Get all messages (admin use)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ submittedAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch messages.' });
  }
});

module.exports = router;
