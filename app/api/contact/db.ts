// app/api/contact/db.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
let cachedDb: Db | null = null;

/**
 * Connects to MongoDB and returns a Db instance.
 * Caches the connection for subsequent calls.
 */
export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) return cachedDb;
  await client.connect();
  cachedDb = client.db("Lead"); // or change "Lead" to your preferred database name
  return cachedDb;
}
