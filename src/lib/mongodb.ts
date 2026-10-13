import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "career_prep";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const mongoOptions = {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 5000,
  maxPoolSize: 10,
};

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment variables.");
  }

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, mongoOptions);
    global._mongoClientPromise = client.connect().catch((err) => {
      // Clear cache on connection failure so subsequent requests can retry cleanly
      global._mongoClientPromise = undefined;
      throw err;
    });
  }

  return global._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

export const ARTICLES_COLLECTION = "articles";
