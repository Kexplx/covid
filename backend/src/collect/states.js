const axios = require('axios').default;
const getHospitalization = require('./hospitalization');

async function getStates() {
  const url = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?where=1%3D1&outFields=LAN_ew_GEN,LAN_ew_EWZ,Fallzahl,Aktualisierung,cases7_bl,Death,cases7_bl_per_100k&returnGeometry=false&outSR=4326&f=json`;

  const { data } = await axios(url);

  const states = data.features.map(({ attributes }) => ({
    name: attributes['LAN_ew_GEN'],
    population: attributes['LAN_ew_EWZ'],
    totalCases: attributes['Fallzahl'],
    lastUpdated: new Date(attributes['Aktualisierung']).toISOString(),
    casesInLast7Days: attributes['cases7_bl'],
    totalDeaths: attributes['Death'],
    incidence: attributes['cases7_bl_per_100k'],
  }));

  // Add hospitalization to bavaria.
  const [, bavariaHospitalizationIncidence] = await getHospitalization();
  const bavaria = states.find(s => s.name === 'Bayern');
  bavaria.hospitalizationIncidence = bavariaHospitalizationIncidence;

  return states;
}

module.exports = getStates;
