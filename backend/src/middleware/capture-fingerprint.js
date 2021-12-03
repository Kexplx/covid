const MongoDB = require('../mongodb');
const hashObject = require('object-hash');

const mongoDb = new MongoDB();

async function captureFingerprint(req, res, next) {
  next();

  delete req.headers['cache-control'];
  const fingerprint = hashObject(req.headers);

  const [latestFingerprintDocument] = await mongoDb.getFingerprintDocuments(1);

  const fingerprintDoesNotExist = !latestFingerprintDocument.fingerprints.includes(fingerprint);
  if (fingerprintDoesNotExist) {
    await mongoDb.insertFingerprint(latestFingerprintDocument._id, fingerprint);
  }
}

module.exports = captureFingerprint;
