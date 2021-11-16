const { MongoClient } = require('mongodb');

const DB_URL = process.env.MONGO_DB_CONNECT_URL;

const COLLECTION_VACCINATION = 'vaccination';
const COLLECTION_GERMANY = 'germany';
const COLLECTION_STATES = 'states';
const COLLECTION_DISTRICTS = 'districts';

class MongoDB {
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

  async getDistrictHistory(code, limit) {
    const [collection, close] = await this._connect(COLLECTION_DISTRICTS);

    const districtHistory = await collection.find({ code }).sort({ _id: -1 }).limit(Number(limit)).toArray();
    close();

    return districtHistory;
  }

  async getStateHistory(name, limit) {
    const [collection, close] = await this._connect(COLLECTION_STATES);

    const stateHistory = await collection.find({ name }).sort({ _id: -1 }).limit(Number(limit)).toArray();
    close();

    return stateHistory;
  }

  async getGermanyHistory(limit) {
    const [collection, close] = await this._connect(COLLECTION_GERMANY);

    const germanyHistory = await collection.find().sort({ _id: -1 }).limit(Number(limit)).toArray();
    close();

    return germanyHistory;
  }

  async getVaccinationHistory(limit) {
    const [collection, close] = await this._connect(COLLECTION_VACCINATION);

    const vaccinationHistory = await collection.find().sort({ _id: -1 }).limit(Number(limit)).toArray();
    close();

    return vaccinationHistory;
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
