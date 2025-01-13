import type { SQLiteDatabase } from "expo-sqlite";

export async function createUserTable(db: SQLiteDatabase) {
  try {
    const query = `
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTO INCREMENT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );
    `
    await db.execAsync(query)
  } catch (error) {
    console.log('Error to create the user table')
    throw new Error(`Error: ${error}`)
  }
}