const axios = require('axios').default;

async function getHospitalization() {
  const hospitalizationUrl =
    'https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland/master/Aktuell_Deutschland_COVID-19-Hospitalisierungen.csv';

  const res = await axios.get(hospitalizationUrl, { responseType: 'text' });

  const rows = res.data.split('\n');

  const germanyRow = rows[2];
  const bavariaRow = rows[65];

  const parseHospitalizationRate = row => Number(row.split(',').slice(-1));

  return [parseHospitalizationRate(germanyRow), parseHospitalizationRate(bavariaRow)];
}

module.exports = getHospitalization;
