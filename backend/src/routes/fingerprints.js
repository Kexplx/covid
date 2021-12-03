const express = require('express');
const router = express.Router();

const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { limit } = req.query;

  const fingerprintDocuments = await mongoDb.getFingerprintDocuments(limit);

  res.send(fingerprintDocuments);
});

module.exports = router;
