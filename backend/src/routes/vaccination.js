const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { limit } = req.query;

  const vaccinationHistory = await mongoDb.getVaccinationHistory(limit);

  res.send(vaccinationHistory);
});

module.exports = router;
