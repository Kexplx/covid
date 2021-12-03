const MongoDB = require('../mongodb');
const createHash = require('crypto-js/sha256');

const mongoDb = new MongoDB();

async function takeFingerprint(req, _, next) {
  next();

  const text = `${req.header('user-agent')}${req.header('accept-language')}${req.header('accept-encoding')}`;
  const fingerprint = createHash(text).toString();

  const [latestFingerprintDocument] = await mongoDb.getFingerprintDocuments(1);

  const fingerprintDoesNotExist = !latestFingerprintDocument.fingerprints.includes(fingerprint);
  if (fingerprintDoesNotExist) {
    await mongoDb.insertFingerprint(latestFingerprintDocument._id, fingerprint);
  }
}

module.exports = takeFingerprint;
