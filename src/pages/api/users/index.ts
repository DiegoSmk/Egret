import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/database'
import isEmail from 'validator/lib/isEmail'
import { User } from '../../../utils/types'
import { findByEmail, findByName } from '../../../utils/dbFunction/user'
import { Auth } from '../../../middleware/bcrypt'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { method } = req
  switch (method) {
    case 'GET': {
      // GET data from your data database
      const { db } = await connect()
      const data = await db.users.find().toArray()
      res.status(200).json(data)
      break
    }
    case 'POST': {
      // PUT (update or create) data in your database
      // CREATE
      const userData = req.body
      const emailValid = isEmail(userData.email)

      if (!emailValid) {
        res.status(400).send({ error: 'Email invalid' })
        return
      }
      if (!userData.password || !userData.name) {
        res.status(400).send({ error: 'Missing field(s)' })
        return
      }

      const { db } = await connect()

      if (await findByName(db, userData.name)) {
        res
          .status(403)
          .send({ error: `The name ${userData.name} has already been used.` })
        return
      }

      if (await findByEmail(db, userData.email)) {
        return res
          .status(403)
          .send({ error: `The email ${userData.email} has already been used.` })
      }

      Auth.hashPassword(userData.password, async (err, hash) => {
        if (!err) {
          const { name, email } = userData
          const passHash = hash
          await db.users.insertOne({ name, email, password: passHash })
          // confirming that it was inserted in DB
          if (!(await findByName(db, name))) {
            return res
              .status(400)
              .send({ error: 'something is wrong, try again' })
          }
        }
      })
      res.status(200).json({ message: 'Congratulation' })
      break
    }

    default: {
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}

export default handler
