const express = require('express');
const cors = require('cors');
const { json } = require('express');
const collectAuth = require('./middleware/collect-auth');

const app = express();

// Read environment variables from `.env`.
require('dotenv').config();

// Middleware
app.use(cors());
app.use(json({ limit: '50kb' }));

// Import and setup routes
const collectRouter = require('./routes/collect');
const germanyRouter = require('./routes/germany');
const districtsRouter = require('./routes/districts');
const statesRouter = require('./routes/states');
const vaccinationRouter = require('./routes/vaccination');
const feedbackRouter = require('./routes/feedback');
const jokeOfTheDayRouter = require('./routes/joke-of-the-day');
const topDistrictsRouter = require('./routes/top-districts');

if (process.env.NODE_ENV === 'production') {
  app.use('/collect', collectAuth, collectRouter);
} else {
  app.use('/collect', collectRouter);
}
app.use('/top-districts', topDistrictsRouter);
app.use('/joke-of-the-day', jokeOfTheDayRouter);
app.use('/germany', germanyRouter);
app.use('/feedback', feedbackRouter);
app.use('/districts', districtsRouter);
app.use('/states', statesRouter);
app.use('/vaccination', vaccinationRouter);

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
