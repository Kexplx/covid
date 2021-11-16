const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { code, limit } = req.query;

  const districtHistory = await mongoDb.getDistrictHistory(code, limit);

  res.send(districtHistory);
});

module.exports = router;
