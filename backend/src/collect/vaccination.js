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
    percentAtLeastOnceVaccinated: cell_sheet1('G21'),
    totalNumberOfVaccinations: cell_sheet1('C21'),
    bavaria_numberOfPeopleAtLeastOnceVaccinated: cell_sheet1('D5'),
    bavaria_percentAtLeastOnceVaccinated: cell_sheet1('G5'),
    stateWithLowestVaccination: states[0],
    stateWithHighestVaccination: states[states.length - 1],
  };
}

function getStatesAscendingByFirstTimeVaccination(getCell) {
  const states = [
    { name: 'Baden-Württemberg', percentAtLeastOnceVaccinated: getCell('G4') },
    { name: 'Bayern', percentAtLeastOnceVaccinated: getCell('G5') },
    { name: 'Berlin', percentAtLeastOnceVaccinated: getCell('G6') },
    { name: 'Brandenburg', percentAtLeastOnceVaccinated: getCell('G7') },
    { name: 'Bremen', percentAtLeastOnceVaccinated: getCell('G8') },
    { name: 'Hamburg', percentAtLeastOnceVaccinated: getCell('G9') },
    { name: 'Hessen', percentAtLeastOnceVaccinated: getCell('G10') },
    { name: 'Mecklenburg-Vorpommern', percentAtLeastOnceVaccinated: getCell('G11') },
    { name: 'Niedersachsen', percentAtLeastOnceVaccinated: getCell('G12') },
    { name: 'Nordrhein-Westfalen', percentAtLeastOnceVaccinated: getCell('G13') },
    { name: 'Rheinland-Pfalz', percentAtLeastOnceVaccinated: getCell('G14') },
    { name: 'Saarland', percentAtLeastOnceVaccinated: getCell('G15') },
    { name: 'Sachsen', percentAtLeastOnceVaccinated: getCell('G16') },
    { name: 'Sachsen-Anhalt', percentAtLeastOnceVaccinated: getCell('G17') },
    { name: 'Schleswig-Holstein', percentAtLeastOnceVaccinated: getCell('G18') },
    { name: 'Thüringen', percentAtLeastOnceVaccinated: getCell('G19') },
  ].sort((a, b) => a.percentAtLeastOnceVaccinated - b.percentAtLeastOnceVaccinated); // Sort ascending.

  return states;
}

module.exports = getVaccination;
