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
  await deleteOldDistricts();
}

async function deleteOldDistricts() {
  const [collection, close] = await connect(COLLECTION_DISTRICTS);
  const items = await collection.find({}).toArray();

  const idsToDelete = [];
  for (const item of items) {
    const today10DaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000);
    if (new Date(item.lastUpdated) < today10DaysAgo) {
      // District is older than 15 days.
      idsToDelete.push(item._id);
    }
  }

  await collection.deleteMany({ _id: { $in: idsToDelete } });
  console.log(`Deleted ${idsToDelete.length} old districts.`);

  close();
}

migrate();
