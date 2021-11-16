const axios = require('axios').default;
const xlsx = require('xlsx');

async function getVaccination() {
  const url = `https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Daten/Impfquotenmonitoring.xlsx?__blob=publicationFile`;

  const res = await axios.get(url, { responseType: 'arraybuffer' });

  const sheet1 = xlsx.read(res.data).Sheets['Impfquote_bundesweit_Alter'];
  const cell = id => sheet1[id].v;

  const sheet2 = xlsx.read(res.data).Sheets['Erläuterung'];
  const getLastUpdated = /(\d+.\d+.\d+, \d+:\d+ Uhr)/.exec(sheet2['A3'].v)[1];

  return {
    lastUpdated: getLastUpdated,
    numberOfPeopleAtLeastOnceVaccinated: cell('D21'),
    numberOfPeopleFullyVaccinated: cell('E21'),
    percentAtLeastOnceVaccinated: cell('G21'),
    percentFullyVaccinated: cell('L21'),
    totalNumberOfVaccinations: cell('C21'),
    bavaria_numberOfPeopleAtLeastOnceVaccinated: cell('D5'),
    bavaria_numberOfPeopleFullyVaccinated: cell('E5'),
    bavaria_percentAtLeastOnceVaccinated: cell('G5'),
    bavaria_percentFullyVaccinated: cell('L5'),
  };
}

module.exports = getVaccination;
