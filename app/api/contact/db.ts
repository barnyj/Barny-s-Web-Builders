// app/api/contact/db.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

/**
 * Lazily connects to MongoDB and returns a cached Db instance.
 * Throws if MONGODB_URI is missing.
 */
export async function connectToDatabase(): Promise<Db> {
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }
  if (cachedDb) {
    return cachedDb;
  }
  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }
  // Replace "Lead" with your desired database name if needed
  cachedDb = cachedClient.db("Lead");
  return cachedDb;
}
