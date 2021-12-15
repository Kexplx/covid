const { MongoClient } = require('mongodb');

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

class MongoDB {
  async insertFingerprint(documentId, fingerprint) {
    const [collection, close] = await this._connect(COLLECTION_FINGERPRINTS);

    await collection.updateOne(
      { _id: documentId },
      { $push: { fingerprints: fingerprint }, $inc: { fingerprintCount: 1 } },
    );
    close();
  }

  async insertFingerprintDocument() {
    const document = {
      created: new Date().toISOString(),
      fingerprints: [],
      fingerprintCount: 0,
    };

    const [collection, close] = await this._connect(COLLECTION_FINGERPRINTS);
    await collection.insertOne(document);
    close();
  }

  async getFingerprintDocuments(limit = 1) {
    const [collection, close] = await this._connect(COLLECTION_FINGERPRINTS);
    const fingerprintDocuments = await collection.find().sort({ _id: -1 }).limit(limit).toArray();
    close();

    return fingerprintDocuments;
  }

  async insertTopDistricts(districts) {
    const [collection, close] = await this._connect(COLLECTION_TOP_Districts);
    const document = {
      lastUpdated: new Date().toISOString(),
      districts,
    };

    await collection.insertOne(document);
    close();
  }

  async getTopDistrictsDocument() {
    const [collection, close] = await this._connect(COLLECTION_TOP_Districts);
    const topDistrictsDocument = await collection.find().sort({ _id: -1 }).limit(1).toArray();
    close();

    return topDistrictsDocument;
  }

  async insertGermany(germany) {
    const [collection, close] = await this._connect(COLLECTION_GERMANY);

    await collection.insertOne(germany);
    close();
  }

  async insertVaccination(vaccination) {
    const [collection, close] = await this._connect(COLLECTION_VACCINATION);

    await collection.insertOne(vaccination);
    close();
  }

  async insertDistricts(districts) {
    const [collection, close] = await this._connect(COLLECTION_DISTRICTS);

    await collection.insertMany(districts);
    close();
  }

  async insertStates(states) {
    const [collection, close] = await this._connect(COLLECTION_STATES);

    await collection.insertMany(states);
    close();
  }

  async insertFeedback(feedback) {
    const [collection, close] = await this._connect(COLLECTION_FEEDBACK);

    await collection.insertOne(feedback);
    close();
  }

  async getDistrictHistory(code, limit) {
    const [collection, close] = await this._connect(COLLECTION_DISTRICTS);

    const districtHistory = await collection
      .find({ code: Number(code) })
      .sort({ _id: -1 })
      .limit(limit)
      .toArray();
    close();

    return districtHistory;
  }

  async getStateHistory(name, limit) {
    const [collection, close] = await this._connect(COLLECTION_STATES);

    const stateHistory = await collection.find({ name }).sort({ _id: -1 }).limit(limit).toArray();
    close();

    return stateHistory;
  }

  async getGermanyHistory(limit) {
    const [collection, close] = await this._connect(COLLECTION_GERMANY);

    const germanyHistory = await collection.find().sort({ _id: -1 }).limit(limit).toArray();
    close();

    return germanyHistory;
  }

  async getVaccinationHistory(limit) {
    const [collection, close] = await this._connect(COLLECTION_VACCINATION);

    const vaccinationHistory = await collection.find().sort({ _id: -1 }).limit(limit).toArray();
    close();

    return vaccinationHistory;
  }

  async insertJokes(jokes) {
    const [collection, close] = await this._connect(COLLECTION_JOKES);

    await collection.insertMany(jokes);

    close();
  }

  async getJokeOfTheDayCount() {
    const [collection, close] = await this._connect(COLLECTION_JOKE_OF_THE_DAY_COUNT);

    const { count } = await collection.findOne();
    close();

    return count;
  }

  async incrementJokeOfTheDayCount() {
    const [collection, close] = await this._connect(COLLECTION_JOKE_OF_THE_DAY_COUNT);

    // Specifying an empty document with `{ }` will
    // return the first document in the collection.
    await collection.updateOne({}, { $inc: { count: 1 } });
    close();
  }

  /**
   * Connects to the mongo db and returns an array,
   * where the first item is the specified collection
   * and the second item is a function to close the client.
   *
   * @example
   * const [myCollection, close] = this.connect("my-collection");
   *
   * // execute queries...
   *
   * close();
   */
  async _connect(collectionName) {
    const client = new MongoClient(DB_URL);
    const clientCloseCb = () => client.close();

    await client.connect();
    const db = client.db();
    const collection = db.collection(collectionName);

    return [collection, clientCloseCb];
  }
}

module.exports = MongoDB;
