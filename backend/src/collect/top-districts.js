const axios = require('axios').default;
const { parseGermanStringDateToISOString } = require('../utils/date');

async function getTopDistricts(n = 10) {
  const url = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=GEN,BEZ,last_update,cases7_per_100k,EWZ,bl&returnGeometry=false&f=json`;

  const { data } = await axios(url);

  const districts = data.features.map(({ attributes }) => ({
    name: attributes['GEN'],
    lastUpdated: parseGermanStringDateToISOString(attributes['last_update']),
    population: attributes['EWZ'],
    incidence: attributes['cases7_per_100k'],
    type: attributes['BEZ'],
    state: attributes['BL'],
  }));

  districts.sort((a, b) => b.incidence - a.incidence);

  return districts.slice(0, n);
}

module.exports = getTopDistricts;
