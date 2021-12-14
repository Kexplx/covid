const getHospitalization = require('./hospitalization');
const getStates = require('./states');
const MongoDB = require('../mongodb');

const mongodb = new MongoDB();

async function getGermany() {
  const states = await getStates();

  // Calculate incidence.
  const populationSum = states.reduce((acc, curr) => (acc += curr.population), 0);
  const casesLast7DaysSum = states.reduce((acc, curr) => (acc += curr.casesInLast7Days), 0);

  const incidence = (casesLast7DaysSum / populationSum) * 100000;

  // Calculate total cases.
  const totalCases = states.reduce((acc, curr) => (acc += curr.totalCases), 0);

  // Calculate total deaths.
  const totalDeaths = states.reduce((acc, curr) => (acc += curr.totalDeaths), 0);

  // Add hospitalization
  const [germanyHospitalizationIncidence] = await getHospitalization();

  // Get last germany to calculate new cases.
  const [lastGermany] = await mongodb.getGermanyHistory(1);
  const newCases = totalCases - lastGermany.totalCases;

  return {
    lastUpdated: states[0].lastUpdated,
    newCases,
    incidence,
    hospitalizationIncidence: germanyHospitalizationIncidence,
    totalCases,
    totalDeaths,
  };
}

module.exports = getGermany;
