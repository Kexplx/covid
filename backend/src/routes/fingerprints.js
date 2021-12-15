const express = require('express');
const router = express.Router();

const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { limit } = req.query;

  const fingerprintDocuments = await mongoDb.getFingerprintDocuments(limit);

  const documentsWithoutFingerprints = fingerprintDocuments.map(d => ({
    created: d.created,
    fingerprintCount: d.fingerprintCount,
  }));

  res.send(documentsWithoutFingerprints);
});

router.get('/max', async (_, res) => {
  // All fingerprint documents (using limit(0) is equal to no limit).
  const fingerprintDocuments = await mongoDb.getFingerprintDocuments(0);

  const documentWithMaxUsers = fingerprintDocuments.reduce((currMax, curr) => {
    if (curr.fingerprintCount > currMax.fingerprintCount) {
      return curr;
    }

    return currMax;
  });

  res.send(documentWithMaxUsers);
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
