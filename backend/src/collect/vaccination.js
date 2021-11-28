const axios = require('axios').default;
const xlsx = require('xlsx');

async function getVaccination() {
  const url = `https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Daten/Impfquotenmonitoring.xlsx?__blob=publicationFile`;

  const res = await axios.get(url, { responseType: 'arraybuffer' });

  const sheet1 = xlsx.read(res.data).Sheets['Impfquote_bundesweit_Alter'];
  const cell_sheet1 = id => sheet1[id].v;

  const sheet2 = xlsx.read(res.data).Sheets['Erläuterung'];
  const getLastUpdated = /(\d+.\d+.\d+, \d+:\d+ Uhr)/.exec(sheet2['A3'].v)[1];

  const sheet3 = xlsx.read(res.data).Sheets['Impfungen_Impfstoff'];
  const cell_sheet3 = id => sheet3[id].v;

  return {
    lastUpdated: getLastUpdated,
    numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D21'),
    numberOfPeopleFullyVaccinated: cell_sheet1('E21'),
    percentAtLeastOnceVaccinated: cell_sheet1('G21'),
    percentFullyVaccinated: cell_sheet1('L21'),
    totalNumberOfVaccinations: cell_sheet1('C21'),
    vaccinesUsed_firstVaccination: {
      biontech: cell_sheet3('D21'),
      moderne: cell_sheet3('E21'),
      astrazeneca: cell_sheet3('F21'),
      janssen: cell_sheet3('G21'),
    },
    vaccinesUsed_secondVaccination: {
      biontech: cell_sheet3('J21'),
      moderne: cell_sheet3('K21'),
      astrazeneca: cell_sheet3('L21'),
    },
    bavaria_numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D5'),
    bavaria_numberOfPeopleFullyVaccinated: cell_sheet1('E5'),
    bavaria_percentAtLeastOnceVaccinated: cell_sheet1('G5'),
    bavaria_percentFullyVaccinated: cell_sheet1('L5'),
    bavaria_vaccinesUsed_firstVaccination: {
      biontech: cell_sheet3('D5'),
      moderne: cell_sheet3('E5'),
      astrazeneca: cell_sheet3('F5'),
      janssen: cell_sheet3('G5'),
    },
    bavaria_vaccinesUsed_secondVaccination: {
      biontech: cell_sheet3('J5'),
      moderne: cell_sheet3('K5'),
      astrazeneca: cell_sheet3('L5'),
    },
  };
}

module.exports = getVaccination;
