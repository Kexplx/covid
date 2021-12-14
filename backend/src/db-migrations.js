require('dotenv').config();
const { MongoClient } = require('mongodb');
const { parseGermanStringDateToISOString } = require('./utils/date');

const DB_URL = process.env.MONGO_DB_CONNECT_URL;

const COLLECTION_VACCINATION = 'vaccination';
const COLLECTION_GERMANY = 'germany';
const COLLECTION_STATES = 'states';
const COLLECTION_DISTRICTS = 'districts';
const COLLECTION_JOKES = 'jokes';
const COLLECTION_FEEDBACK = 'feedback';
const COLLECTION_TOP_Districts = 'districts-top';
const COLLECTION_JOKE_OF_THE_DAY_COUNT = 'joke-day-count';
const COLLECTION_FINGERPRINTS = 'fingerprints';

async function connect(collectionName) {
  const client = new MongoClient(DB_URL);
  const clientCloseCb = () => client.close();

  await client.connect();
  const db = client.db();
  const collection = db.collection(collectionName);

  return [collection, clientCloseCb];
}

async function migrate() {
  const [collection, close] = await connect(COLLECTION_GERMANY);
  const items = await collection.find({}).toArray();

  for (const item of items) {
    const fixed = new Date(item.lastUpdated).toISOString();

    await collection.updateOne({ _id: item._id }, { $set: { lastUpdated: fixed } });
  }

  close();
}

migrate();
