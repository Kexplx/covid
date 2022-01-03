const express = require('express');
const router = express.Router();
const Geocoder = require('node-geocoder');

router.get('/', async (req, res) => {
  const { lat, lon } = req.query;

  const location = await getLocation(lat, lon);

  res.send(location);
});

function getLocation(lat, lon) {
  const geocoder = Geocoder({ apiKey: process.env.GOOGLE_MAPS_API_KEY });

  return new Promise((res, _) => {
    geocoder.reverse({ lat, lon }, (err, data) => {
      if (err) {
        console.log('Error while getting location.');
      }

      const districtName = data[0].administrativeLevels['level3long'];
      const stateName = data[0].administrativeLevels['level1long'];

      res({ districtName, stateName });
    });
  });
}

module.exports = router;
