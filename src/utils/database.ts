import { MongoClient } from 'mongodb'
import { User, Database } from './types'

interface ConnectType {
  client: MongoClient
  db: Database
}

const { MONGODB_URI, MONGODB_DB } = process.env

// validations
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// eslint-disable-next-line
// @ts-ignore:disable-next-line
let cached = global.mongo
// eslint-disable-next-line
// @ts-ignore:disable-next-line
if (!cached) cached = global.mongo = {}

export default async function connect(): Promise<ConnectType> {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    const conn = { client: undefined, db: undefined }
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    cached.promise = MongoClient.connect(<string>MONGODB_URI, opts)
      .then(client => {
        // eslint-disable-next-line
        // @ts-ignore:disable-next-line
        conn.client = client
        const db = client.db(MONGODB_DB)
        return db
      })
      .then(db => {
        // conn.db = db
        // eslint-disable-next-line
        // @ts-ignore:disable-next-line
        conn.db = {
          users: db.collection<User>('users')
        }
        cached.conn = conn
      })
  }
  await cached.promise
  return cached.conn
}
