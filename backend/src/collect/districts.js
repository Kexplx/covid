const axios = require('axios').default;

async function getDistricts() {
  const districtCodes = [
    9362, // Regensburg
    9562, // Erlangen
    9162, // München
    9564, // Nürnberg
    9179, // Fürstenfeldbruck (LK)
    9372, // Cham (LK)
    9278, // Straubing-Bogen (LK)
    9663, // Würzburg
    11007, // Berlin Tempelhof-Schöneberg (Bezirk)
    14713, // Leipzig
  ];
  const filter = districtCodes.reduce((acc, curr) => (acc += `admunitid=${curr} OR `), '').replace(/ OR $/, ''); // Strip off trailing ' OR '

  const url = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=${filter}&outFields=GEN,BEZ,cases,deaths,last_update,cases7_per_100k,bl,AdmUnitId&returnGeometry=false&f=json`;

  const { data } = await axios(url);

  const districts = data.features.map(({ attributes }) => ({
    code: attributes['AdmUnitId'],
    name: attributes['GEN'],
    lastUpdated: attributes['last_update'],
    incidence: attributes['cases7_per_100k'],
    type: attributes['BEZ'],
    state: attributes['BL'],
    totalCases: attributes['cases'],
    totalDeaths: attributes['deaths'],
  }));

  return districts;
}

module.exports = getDistricts;
