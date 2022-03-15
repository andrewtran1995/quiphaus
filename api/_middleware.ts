import { VercelApiHandler, VercelRequest, VercelResponse } from '@vercel/node'
import { authenticate } from './_auth'
import { Promisable } from 'type-fest'

export function createHandler (
  fn: (
    req: VercelRequest,
    res: VercelResponse,
    userId: string
  ) => Promisable<void>
): VercelApiHandler {
  // `VercelApiHandler` defines the return type as `void` when it should be promisable.
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return async (req, res) => {
    try {
      const { userId } = authenticate(req)
      await fn(req, res, userId)
    } catch (e) {
      console.error(e)
      res.status(500).send(e)
    }
  }
}
