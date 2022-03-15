import type { VercelApiHandler } from '@vercel/node'

export default <VercelApiHandler>((req, res) => {
  res.status(200).json({
    myKey: 'hello, world!'
  })
})
