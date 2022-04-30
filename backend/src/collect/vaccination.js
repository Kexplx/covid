const axios = require('axios').default;
const xlsx = require('xlsx');
const { parseGermanStringDateToISOString } = require('../utils/date');

async function getVaccination() {
  const url = `https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Daten/Impfquotenmonitoring.xlsx?__blob=publicationFile`;

  const res = await axios.get(url, { responseType: 'arraybuffer' });

  const sheet1 = xlsx.read(res.data).Sheets['Impfquote_bundesweit_Alter'];
  const cell_sheet1 = id => sheet1[id].v;

  const sheet2 = xlsx.read(res.data).Sheets['Erläuterung'];

  const states = getStatesAscendingByFirstTimeVaccination(cell_sheet1);

  return {
    lastUpdated: parseGermanStringDateToISOString(/(\d+.\d+.\d+, \d+:\d+ Uhr)/.exec(sheet2['A3'].v)[1]),
    numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D21'),
    percentAtLeastOnceVaccinated: cell_sheet1('H21'),
    totalNumberOfVaccinations: cell_sheet1('C21'),
    bavaria_numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D5'),
    bavaria_percentAtLeastOnceVaccinated: cell_sheet1('H5'),
    stateWithLowestVaccination: states[0],
    stateWithHighestVaccination: states[states.length - 1],
  };
}

function getStatesAscendingByFirstTimeVaccination(getCell) {
  const states = [
    { name: 'Baden-Württemberg', percentAtLeastOnceVaccinated: getCell('H4') },
    { name: 'Bayern', percentAtLeastOnceVaccinated: getCell('H5') },
    { name: 'Berlin', percentAtLeastOnceVaccinated: getCell('H6') },
    { name: 'Brandenburg', percentAtLeastOnceVaccinated: getCell('H7') },
    { name: 'Bremen', percentAtLeastOnceVaccinated: getCell('H8') },
    { name: 'Hamburg', percentAtLeastOnceVaccinated: getCell('H9') },
    { name: 'Hessen', percentAtLeastOnceVaccinated: getCell('H10') },
    { name: 'Mecklenburg-Vorpommern', percentAtLeastOnceVaccinated: getCell('H11') },
    { name: 'Niedersachsen', percentAtLeastOnceVaccinated: getCell('H12') },
    { name: 'Nordrhein-Westfalen', percentAtLeastOnceVaccinated: getCell('H13') },
    { name: 'Rheinland-Pfalz', percentAtLeastOnceVaccinated: getCell('H14') },
    { name: 'Saarland', percentAtLeastOnceVaccinated: getCell('H15') },
    { name: 'Sachsen', percentAtLeastOnceVaccinated: getCell('H16') },
    { name: 'Sachsen-Anhalt', percentAtLeastOnceVaccinated: getCell('H17') },
    { name: 'Schleswig-Holstein', percentAtLeastOnceVaccinated: getCell('H18') },
    { name: 'Thüringen', percentAtLeastOnceVaccinated: getCell('H19') },
  ].sort((a, b) => a.percentAtLeastOnceVaccinated - b.percentAtLeastOnceVaccinated); // Sort ascending.

  return states;
}

module.exports = getVaccination;
