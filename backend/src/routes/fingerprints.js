const express = require('express');
const router = express.Router();

const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { limit } = req.query;

  const fingerprintDocuments = await mongoDb.getFingerprintDocuments(limit);

  res.send(fingerprintDocuments);
});

router.post('/', async (req, res) => {
  res.end();

  const { fingerprint } = req.body;

  const [latestFingerprintDocument] = await mongoDb.getFingerprintDocuments(1);

  const newFingerprint = !latestFingerprintDocument.fingerprints.includes(fingerprint);
  if (newFingerprint) {
    await mongoDb.insertFingerprint(latestFingerprintDocument._id, fingerprint);
  }
});

module.exports = router;
