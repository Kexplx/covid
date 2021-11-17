const express = require('express');
const cors = require('cors');

const app = express();

// Read enviornment variables from `.env`.
require('dotenv').config();

// Middleware
app.use(cors());

// Import and setup routes
const collectRouter = require('./routes/collect');
const germanyRouter = require('./routes/germany');
const districtsRouter = require('./routes/districts');
const statesRouter = require('./routes/states');
const vaccinationRouter = require('./routes/vaccination');
const jokeOfTheDayRouter = require('./routes/joke-of-the-day');

app.use('/collect', collectRouter);
app.use('/joke-of-the-day', jokeOfTheDayRouter);
app.use('/germany', germanyRouter);
app.use('/districts', districtsRouter);
app.use('/states', statesRouter);
app.use('/vaccination', vaccinationRouter);

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
