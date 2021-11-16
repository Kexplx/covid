const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongodb = new MongoDB();

router.get('/', async (req, res) => {
  const { name, limit } = req.query;

  const stateHistory = await mongodb.getStateHistory(name, limit);

  res.send(stateHistory);
});

module.exports = router;
