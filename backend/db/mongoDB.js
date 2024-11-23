import { MongoClient } from "mongodb";

let dbConnection = undefined;

export function fetchCollection(name) {
  return connect().collection(name);
}

function connect() {
  if (dbConnection != undefined) return dbConnection;

  try {
    const client = new MongoClient(process.env.MONGODB);
    dbConnection = client.db("receptportalen");
    console.log("Connected to MongoDB, receptportalen");
    return dbConnection;
  } catch (error) {
    console.error(error);
  }
}
