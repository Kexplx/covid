const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (req, res) => {
  const { limit } = req.query;

  const [topDistrictsDocument] = await mongoDb.getTopDistrictsDocument();
  topDistrictsDocument.districts = topDistrictsDocument.districts.slice(0, limit);

  res.send(topDistrictsDocument);
});

module.exports = router;
