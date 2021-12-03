const express = require('express');
const router = express.Router();

const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.post('/', async (req, res) => {
  res.end();

  const { limit } = req.query;

  const fingerprintDocuments = await mongoDb.getFingerprintDocuments(limit);

  return fingerprintDocuments;
});

module.exports = router;
