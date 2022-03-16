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
      const { date, quote, quotee } = req.body as Record<
        string,
        string | undefined
      >
      if (!quote) {
        res.status(400).send("'quoteText' required")
        return
      }
      const savedQuote = await storeClient(userId).addQuote({
        date,
        quote,
        quotee
      })
      res.status(200).json(savedQuote)
      break
    }
  }
})

export default handler
