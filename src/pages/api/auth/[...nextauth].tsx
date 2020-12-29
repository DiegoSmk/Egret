import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiResponse, NextApiRequest } from 'next'
import connect from '../../../utils/database'
import { User } from '../../../utils/types'
import { Auth } from '../../../middleware/bcrypt'
import { findByName } from '../../../utils/dbFunction/user'

interface IDataIn {
  username: string
  password: string
}

async function signInUser(data: IDataIn): Promise<User | null> {
  const name = data.username
  const password = data.password

  if (!password || !name) {
    return null
  }
  const { db } = await connect()
  const user = await findByName(db, name)
  const isMatch = await Auth.compare(password, user.password)

  if (!isMatch) {
    return Promise.reject(new Error('error message'))
  }
  return user
}

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async credentials => {
        try {
          const data = {
            username: credentials.username,
            password: credentials.password
          }
          const user = signInUser(data)

          if (user) {
            return Promise.resolve(user)
          }
        } catch (error) {
          console.log(error)
          return Promise.resolve(null)
          // return Promise.reject(new Error('error message'))
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    register: '/register'
  }

  // A database is optional, but required to persist accounts in a database
  // callbacks: {
  //   signIn: async (user, account, profile) => {
  //     console.log({ user });
  //     return Promise.resolve(false);
  //   }
  // },

  // session: { jwt: true }
  // database: process.env.DATABASE_URL
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options)
