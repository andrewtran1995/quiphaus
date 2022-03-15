import { storeClient } from './_store'
import { createHandler } from './_middleware'

const handler = createHandler(async (req, res, userId) => {
  switch (req.method) {
    case 'DELETE':
      await storeClient(userId).deleteQuotes()
      res.status(200).send('')
      return
    case 'GET': {
      const quotes = await storeClient(userId).getQuotes()
      res.status(200).json(quotes)
    }
  }
})

export default handler
