const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoClient = new MongoDB();

router.post('/', async (req, res) => {
  res.end();

  const feedback = req.body;
  await mongoClient.insertFeedback(feedback);
});

router.get('/', async (_, res) => {
  const feedbacks = await mongoClient.getFeedbacks();

  res.send(feedbacks);
});

module.exports = router;
