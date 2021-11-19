const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.post('/', async (req, res) => {
  res.end();

  const feedback = req.body;
  await mongoDb.insertFeedback(feedback);
});

module.exports = router;
