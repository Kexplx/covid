const express = require('express');
const MongoDB = require('../mongodb');
const router = express.Router();
const getGermany = require('../collect/germany');
const getStates = require('../collect/states');
const getDistricts = require('../collect/districts');
const getVaccination = require('../collect/vaccination');
const getTopDistricts = require('../collect/top-districts');

const mongoDb = new MongoDB();

router.get('/top-districts', async (_, res) => {
  res.end();

  try {
    const topDistricts = await getTopDistricts(10);
    await mongoDb.insertTopDistricts(topDistricts);
  } catch (error) {
    console.log('Error while incrementing joke of the day count.');
    console.log(error);
  }
});

router.get('/joke-of-the-day', async (_, res) => {
  res.end();

  try {
    await mongoDb.incrementJokeOfTheDayCount();
  } catch (error) {
    console.log('Error while incrementing joke of the day count.');
    console.log(error);
  }
});

router.get('/germany', async (_, res) => {
  res.end();

  try {
    const germany = await getGermany();
    await mongoDb.insertGermany(germany);
  } catch (error) {
    console.log('Error while collecting: Germany.');
    console.log(error);
  }
});

router.get('/states', async (_, res) => {
  res.end();

  try {
    const states = await getStates();
    await mongoDb.insertStates(states);
  } catch (error) {
    console.log('Error while collecting: States.');
    console.log(error);
  }
});

router.get('/districts', async (_, res) => {
  res.end();

  try {
    const districts = await getDistricts();
    await mongoDb.insertDistricts(districts);
  } catch (error) {
    console.log('Error while collecting: Districts.');
    console.log(error);
  }
});

router.get('/vaccination', async (_, res) => {
  res.end();

  try {
    const vaccination = await getVaccination();
    await mongoDb.insertVaccination(vaccination);
  } catch (error) {
    console.log('Error while collecting: Vaccination.');
    console.log(error);
  }
});

module.exports = router;
