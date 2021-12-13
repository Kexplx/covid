const axios = require('axios').default;
const xlsx = require('xlsx');

async function getVaccination() {
  const url = `https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Daten/Impfquotenmonitoring.xlsx?__blob=publicationFile`;

  const res = await axios.get(url, { responseType: 'arraybuffer' });

  const sheet1 = xlsx.read(res.data).Sheets['Impfquote_bundesweit_Alter'];
  const cell_sheet1 = id => sheet1[id].v;

  const sheet2 = xlsx.read(res.data).Sheets['Erläuterung'];
  const getLastUpdated = /(\d+.\d+.\d+, \d+:\d+ Uhr)/.exec(sheet2['A3'].v)[1];

  return {
    lastUpdated: getLastUpdated,
    numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D21'),
    percentAtLeastOnceVaccinated: cell_sheet1('G21'),
    totalNumberOfVaccinations: cell_sheet1('C21'),
    bavaria_numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D5'),
    bavaria_percentAtLeastOnceVaccinated: cell_sheet1('G5'),
  };
}

module.exports = getVaccination;
