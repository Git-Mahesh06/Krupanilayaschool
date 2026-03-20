const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Admission = require('../models/Admission');

const admissionValidation = [
  body('parentName').trim().notEmpty().withMessage('Parent name is required').isLength({ max: 100 }),
  body('studentName').trim().notEmpty().withMessage('Student name is required').isLength({ max: 100 }),
  body('classApplyingFor').notEmpty().withMessage('Class is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ min: 7, max: 15 }),
  body('email').isEmail().withMessage('Enter a valid email').normalizeEmail(),
  body('message').optional().isLength({ max: 1000 }).withMessage('Message too long')
];

// POST /api/admissions
router.post('/', admissionValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).json({
      success: true,
      message: 'Admission inquiry submitted successfully! We will contact you soon.',
      data: { id: admission._id }
    });
  } catch (err) {
    console.error('Admission submission error:', err);
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' });
  }
});

// GET /api/admissions
router.get('/', async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ submittedAt: -1 });
    res.json({ success: true, data: admissions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch admissions.' });
  }
});

module.exports = router;