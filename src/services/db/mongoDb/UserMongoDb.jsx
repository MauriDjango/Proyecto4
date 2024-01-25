// Import MongoClient from the 'mongodb' module
import { MongoClient } from "mongodb";


// TODO fix this security breach
// Replace the uri string with your connection string.
const uri = "mongodb+srv://mauricedarner:pfpgAvWeW6SAnwho@clustermauridjango.t49nps4.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient instance
export const client = new MongoClient(uri);

class MongoDbAtlas {
  _dbClient
  _dbName
  _collection

  constructor(mongoClient, dbNName, collection) {
    try {
      this._dbClient = mongoClient
      this._dbName = dbNName
      this._collection = collection
    } catch (e) {
      console.log(e.message + 'the routes object was not correctly defined')
    }
  }

  async getAll() {
    try
    {
      await this._dbClient.connect();

      const userList = []
      const database = this._dbClient.db(this._dbName);
      const collection = database.collection(this._collection);
      const results = await collection.find();

      await results.forEach(document => {
        userList.push(document);
      });
      return userList;
    }
    catch (e)
    {
      console.log(e.message)
    }
    finally
    {
      await client.close();
    }
  }

  async getById(id) {
    try {
      await this._dbClient.connect();

      const query = { id: id }
      const database = this._dbClient.db(this._dbName);
      const collection = database.collection(this._collection);

      return await collection.find(query);
    }
    catch (e)
    {
      console.log(e.message)
    }
    finally
    {
      this._dbClient.close();
    }
  }

  async create(data) {
    try {
      await this._dbClient.connect();

      const database = this._dbClient.db(this._dbName);
      const collection = database.collection(this._collection);

      return await collection.insertOne(data);
    }
    catch (e)
    {
      console.log(e.message)
    }
    finally
    {
      this._dbClient.close();
    }
  }

  async update(data) {
    try {
      await this._dbClient.connect();

      const database = this._dbClient.db(this._dbName);
      const collection = database.collection(this._collection);

      return await collection.updateOne(
        { id: data.id },
      );
    }
    catch (e)
    {
      console.log(e.message)
    }
    finally
    {
      this._dbClient.close();
    }
  }

  async delete(userId) {
    try {
      await this._dbClient.connect();

      const database = this._dbClient.db(this._dbName);
      const collection = database.collection(this._collection);

      return await collection.delete({id: userId})
    }
    catch (e)
    {
      console.log(e.message)
    }
    finally
    {
      this._dbClient.close();
    }
  }
}
