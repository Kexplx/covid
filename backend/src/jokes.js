require('dotenv').config();

const jokes = ['Sample Joke'];

(async () => {
  const MongoDB = require('./mongodb');
  const mongo = new MongoDB();

  const mappedJokes = jokes.map(j => ({ text: j }));
  await mongo.insertJokes(mappedJokes);
})();
