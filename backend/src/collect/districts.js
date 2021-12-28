const axios = require('axios').default;
const { parseGermanStringDateToISOString } = require('../utils/date');

async function getDistricts() {
  const url = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=GEN,BEZ,cases,deaths,last_update,cases7_per_100k,bl,AdmUnitId&returnGeometry=false&f=json`;

  const { data } = await axios(url);

  const districts = data.features.map(({ attributes }) => ({
    code: attributes['AdmUnitId'],
    name: attributes['GEN'],
    lastUpdated: parseGermanStringDateToISOString(attributes['last_update']),
    incidence: attributes['cases7_per_100k'],
    type: attributes['BEZ'],
    state: attributes['BL'],
    totalCases: attributes['cases'],
    totalDeaths: attributes['deaths'],
  }));

  return districts;
}

module.exports = getDistricts;
