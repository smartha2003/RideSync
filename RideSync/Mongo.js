const { MongoClient } = require('mongodb');

const uri = '646925f364e77666a558da45';
const client = new MongoClient(uri);

async function connectAndQuery() {
  try {
    await client.connect();

    const database = client.db('your-database-name');
    const collection = database.collection('your-collection-name');

    // Perform database operations here
    const documents = await collection.find().toArray();
    console.log(documents);
  } finally {
    await client.close();
  }
}

connectAndQuery();