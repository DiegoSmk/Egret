import { NextApiResponse, NextApiRequest } from 'next'
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import connect from '../../middleware/database'

// Initialize the cors middleware
const signIn = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: 'GET'
  })
)

export default async function signInPage(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Run cors
  await signIn(req, res)

  // Rest of the API logic
  if (req.method === 'GET') {
    const { name, password } = req.body
    if (!password || !name) {
      res.status(400).send('Missing field(s)')
      return
    }

    const { db } = await connect()
    const response = await db.collection('user').findOne({ name })

    if (!response) {
      res.status(400).json({ error: `User ${name} not found` })
      return
    }
    return res.status(200).json(response)
    // res.status(200).json({ message: `${name} e ${password}` })
  } else {
    res.status(400).send('request method invalid')
    return console.log('invalid method')
  }
}
