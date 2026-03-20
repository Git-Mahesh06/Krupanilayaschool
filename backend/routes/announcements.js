const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// GET /api/announcements - Get all active announcements
router.get('/', async (req, res) => {
  try {
    const { category, limit = 10 } = req.query;
    const query = { isActive: true };
    if (category) query.category = category;

    const announcements = await Announcement.find(query)
      .sort({ isImportant: -1, date: -1 })
      .limit(Number(limit));

    res.json({ success: true, data: announcements });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch announcements.' });
  }
});

// POST /api/announcements - Create announcement (admin use)
router.post('/', async (req, res) => {
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.status(201).json({ success: true, data: announcement });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create announcement.' });
  }
});

// Seed sample announcements
router.post('/seed', async (req, res) => {
  try {
    const samples = [
      {
        title: 'Annual Day Celebration 2024',
        content: 'We are pleased to announce our Annual Day celebration on December 15th, 2024. All parents are cordially invited.',
        category: 'event',
        isImportant: true,
        date: new Date('2024-12-15')
      },
      {
        title: 'Second Term Examination Schedule',
        content: 'Second term examinations for Classes 1-10 will commence from November 20th, 2024. Students are advised to prepare accordingly.',
        category: 'exam',
        isImportant: true,
        date: new Date('2024-11-20')
      },
      {
        title: 'Diwali Holidays',
        content: 'The school will remain closed from October 31st to November 3rd, 2024 on account of Diwali festival.',
        category: 'holiday',
        isImportant: false,
        date: new Date('2024-10-31')
      },
      {
        title: 'Sports Day Registration Open',
        content: 'Annual Sports Day registrations are now open. Students interested in participating should register with their class teachers before October 25th.',
        category: 'event',
        isImportant: false,
        date: new Date('2024-10-25')
      },
      {
        title: 'School Board Exam Results',
        content: 'Congratulations! Krupa Nilaya School achieves 98% pass rate in Class 10 Board Examinations. We are proud of our students.',
        category: 'achievement',
        isImportant: true,
        date: new Date('2024-05-20')
      }
    ];

    await Announcement.deleteMany({});
    await Announcement.insertMany(samples);
    res.json({ success: true, message: 'Sample announcements seeded successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Seeding failed.' });
  }
});

module.exports = router;
