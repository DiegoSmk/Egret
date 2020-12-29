import { Collection, ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  token?: string
  name: string
  password: string
  email: string
  avatar?: string
  wallet?: wallet
}

interface wallet {
  coins: number
  register: Record<string, unknown>
}

export interface Database {
  users: Collection<User>
}
