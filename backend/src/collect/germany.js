const getHospitalization = require('./hospitalization');
const getStates = require('./states');

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

  return {
    lastUpdated: new Date(states[0].lastUpdated),
    incidence,
    hospitalizationIncidence: germanyHospitalizationIncidence,
    totalCases,
    totalDeaths,
  };
}

module.exports = getGermany;
