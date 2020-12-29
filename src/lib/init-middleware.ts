import { NextApiResponse, NextApiRequest } from 'next'
import { IncomingMessage, ServerResponse } from 'http'
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware

export default function initMiddleware(
  middleware: (
    req: IncomingMessage,
    res: ServerResponse,
    result: Error | any
  ) => unknown
) {
  return (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: Error | any) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
