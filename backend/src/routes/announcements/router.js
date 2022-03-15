const announcements = require('./announcements.json');

const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  const relevantAnnouncements = announcements.filter(a => new Date(a.relevantUntil) > new Date());

  res.send(relevantAnnouncements);
});

module.exports = router;
