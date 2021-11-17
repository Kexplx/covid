const express = require('express');
const router = express.Router();
const MongoDB = require('../mongodb');

const mongoDb = new MongoDB();

router.get('/', async (_, res) => {
  const jokeOfTheDay = await mongoDb.getJokeOfTheDay();

  res.send(jokeOfTheDay);
});

module.exports = router;
