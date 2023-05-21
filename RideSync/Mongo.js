


const { MongoClient } = require('mongodb');

// const uri = '646925f364e77666a558da45';
const uri = "mongodb+srv://VinBid:<RideSync123>@cluster0.xxo8hxt.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectAndQuery(Username, password, status) {
  try {
    await client.connect();

    const database = client.db('your-database-name');
    const collection = database.collection();
    //google places API Google Autocomplete API
    //google maps API
    //google maps api counts as google cloud!
    //create a person object
    db.collection.insertOne(
      {
        id: Username,
        pass: password,
        driverorpass: status,
        longitude: null,
        latitude: null

      }
    )

    // Perform database operations here
    const documents = await collection.find().toArray();
    console.log(documents);
  } finally {
    await client.close();
  }
}


export async function login(Username, password) {
  try {
    console.log("connecting");
    await client.connect();
    console.log("connected");
    const database = client.db('your-database-name');
    const collection = database.collection();
    const query = {Username};
    const result = await collection.find(query).toArray();
    console.log(result);
    if(result != null) {
      query = {password};
      result = result.find(query).toArray;
      if(result == null) {
        console.log("error");
      }
      else {
        console.log("success");
      }
    }

  } finally {
    await client.close();
  }




}

connectAndQuery();
login();