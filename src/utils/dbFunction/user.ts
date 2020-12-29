import { User, Database } from '../types'

export async function findByEmail(
  db: Database,
  email: string
): Promise<User | null> {
  return db.users.findOne({
    email
  })
}

export async function findByName(
  db: Database,
  name: string
): Promise<User | null> {
  return db.users.findOne({
    name
  })
}
