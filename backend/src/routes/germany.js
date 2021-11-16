const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { limit } = req.query;

  const germanyHistory = await mongoDb.getGermanyHistory(limit);

  res.send(germanyHistory);
});

module.exports = router;
