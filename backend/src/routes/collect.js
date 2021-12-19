const express = require('express');
const MongoDB = require('../mongodb');
const router = express.Router();
const getGermany = require('../collect/germany');
const getStates = require('../collect/states');
const getDistricts = require('../collect/districts');
const getVaccination = require('../collect/vaccination');
const getTopDistricts = require('../collect/top-districts');

const mongoDb = new MongoDB();

router.get('/fingerprints', async (_, res) => {
  res.end();

  await mongoDb.insertFingerprintDocument();
});

router.get('/top-districts', async (_, res) => {
  res.end();

  const topDistricts = await getTopDistricts(10);
  const [lastStoredTopDistrictDoc] = await mongoDb.getTopDistrictsDocument();

  if (new Date(topDistricts[0].lastUpdated) > new Date(lastStoredTopDistrictDoc.lastUpdated)) {
    console.log('Top Districts: New data (importing)');
    await mongoDb.insertTopDistricts(topDistricts);
  } else {
    console.log('Top Districts: Old data (skipping import)');
  }
});

router.get('/joke-of-the-day', async (_, res) => {
  res.end();

  await mongoDb.incrementJokeOfTheDayCount();
});

router.get('/germany', async (_, res) => {
  res.end();

  const germany = await getGermany();

  const [lastStoredGermany] = await mongoDb.getGermanyHistory(1);

  if (new Date(germany.lastUpdated) > new Date(lastStoredGermany.lastUpdated)) {
    // Data is new.
    console.log('Germany: New data (importing)');
    await mongoDb.insertGermany(germany);
  } else {
    console.log('Germany: Old data (skipping import)');
  }
});

router.get('/states', async (_, res) => {
  res.end();

  const states = await getStates();
  const [lastStoredBavaria] = await mongoDb.getStateHistory('Bayern', 1);

  if (new Date(states[0].lastUpdated) > new Date(lastStoredBavaria.lastUpdated)) {
    console.log('States: New data (importing)');
    await mongoDb.insertStates(states);
  } else {
    console.log('States: Old data (skipping import)');
  }
});

router.get('/districts', async (_, res) => {
  res.end();

  const districts = await getDistricts();
  const [lastStoredDistrict] = await mongoDb.getDistrictHistory(9362, 1);

  if (new Date(districts[0].lastUpdated) > new Date(lastStoredDistrict.lastUpdated)) {
    console.log('Districts: New data (importing)');
    await mongoDb.insertDistricts(districts);
  } else {
    console.log('Districts: Old data (skipping import)');
  }
});

router.get('/vaccination', async (_, res) => {
  res.end();

  const vaccination = await getVaccination();
  const [lastStoredVaccination] = await mongoDb.getVaccinationHistory(1);

  if (new Date(vaccination.lastUpdated) > new Date(lastStoredVaccination.lastUpdated)) {
    console.log('Vaccination: New data (importing)');
    await mongoDb.insertVaccination(vaccination);
  } else {
    console.log('Vaccination: Old data (skipping import)');
  }
});

module.exports = router;
