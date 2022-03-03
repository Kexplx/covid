const announcements = require('./announcements.json');

const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.send(announcements);
});

module.exports = router;
