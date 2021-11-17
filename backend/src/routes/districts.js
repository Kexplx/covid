const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { codes, limit } = req.query;

  const codesArr = codes.split(',');

  const responses = [];

  for (const code of codesArr) {
    responses.push(mongoDb.getDistrictHistory(code, limit));
  }

  const listOfDistrictHitories = await Promise.all(responses);

  res.send(listOfDistrictHitories);
});

module.exports = router;
