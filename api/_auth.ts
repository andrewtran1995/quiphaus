import { verify } from 'jsonwebtoken'
import { VercelRequest } from '@vercel/node'

/**
 * @see https://community.auth0.com/t/example-of-saving-the-user-id-in-application-database/17325
 */
export function authenticate (req: VercelRequest): { userId: string } {
  const jwt = req.headers.authorization?.split(' ')[1]
  if (!jwt) {
    throw new Error('missing or malformed authorization header')
  }

  const payload = verifyToken(jwt)
  return { userId: payload.sub as string }
}

function verifyToken (jwt: string) {
  return verify(jwt, process.env.AUTH0_SIGNING_KEY_CERT, {
    algorithms: ['RS256'],
    audience: process.env.VITE_AUTH0_AUD
  })
}
