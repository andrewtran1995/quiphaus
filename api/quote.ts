import { storeClient } from './_store'
import { createHandler } from './_middleware'

const handler = createHandler(async (req, res, userId) => {
  switch (req.method) {
    case 'DELETE':
      if (!req.query.id || typeof req.query.id !== 'string') {
        res.status(400).send("'id' required")
        return
      }
      await storeClient(userId).deleteQuote(req.query.id)
      break
    case 'GET': {
      if (!req.query.id || typeof req.query.id !== 'string') {
        res.status(400).send("'id' required")
        return
      }

      const quotes = await storeClient(userId).getQuote(req.query.id)
      res.status(200).json(quotes)
      break
    }
    case 'POST': {
      const { quoteText } = req.body as Record<string, unknown>
      if (!quoteText || typeof quoteText !== 'string') {
        res.status(400).send("'quoteText' required")
        return
      }
      const quote = await storeClient(userId).addQuote(quoteText)
      res.status(200).json(quote)
      break
    }
  }
})

export default handler
