const express = require('express');
const cors = require('cors');
const verifyRequestComesFromAppEngine = require('./middleware/appengine-verify');
const parseQueryParamToInt = require('./middleware/parse-query-param');

const app = express();

// Read environment variables from `.env`.
require('dotenv').config();

// True, if we're running on AppEngine.
const isProduction = process.env.NODE_ENV === 'production';

// Middleware
app.use(cors({ origin: isProduction ? 'https://kexplx.github.io' : '*' }));
app.use(express.json({ limit: '50kb' }));
app.use(parseQueryParamToInt('limit', 'lat', 'lon'));

// Import and setup routes
const collectRouter = require('./routes/collect');
const germanyRouter = require('./routes/germany');
const districtsRouter = require('./routes/districts');
const statesRouter = require('./routes/states');
const vaccinationRouter = require('./routes/vaccination');
const feedbackRouter = require('./routes/feedback');
const jokeOfTheDayRouter = require('./routes/joke-of-the-day');
const topDistrictsRouter = require('./routes/top-districts');
const fingerprintRouter = require('./routes/fingerprints');
const locationRouter = require('./routes/location');

if (isProduction) {
  app.use('/collect', verifyRequestComesFromAppEngine, collectRouter);
} else {
  app.use('/collect', collectRouter);
}

app.use('/top-districts', topDistrictsRouter);
app.use('/fingerprints', fingerprintRouter);
app.use('/joke-of-the-day', jokeOfTheDayRouter);
app.use('/germany', germanyRouter);
app.use('/feedback', feedbackRouter);
app.use('/districts', districtsRouter);
app.use('/states', statesRouter);
app.use('/vaccination', vaccinationRouter);
app.use('/location', locationRouter);

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
