import { Client, ExprArg, query as q, values } from 'faunadb'
import { SetRequired } from 'type-fest'
import { TQuoteDoc, TQuoteDocApiInput, TQuoteDocData } from './_storeTypes'

export function storeClient (userId: string) {
  const client = new Client({
    secret: process.env.FAUNA_ADMIN_KEY
  })

  const quotesRef = q.Collection('quotes')

  return {
    ...client,
    async addQuote (
      input: Pick<TQuoteDocApiInput, 'quote'> &
        Omit<Partial<TQuoteDocApiInput>, 'quote'>
    ): Promise<TQuoteDoc> {
      const res = await client.query<values.Document<TQuoteDocData>>(
        q.Create(quotesRef, {
          data: <TQuoteDocData>{
            date: input.date ?? new Date().toISOString(),
            quote: input.quote,
            quotee: input.quotee ?? 'John Doe',
            userId
          }
        })
      )

      return {
        ...res.data,
        id: res.ref.id
      }
    },
    async deleteQuote (id: string) {
      const res = await client.query(q.Delete(q.Get(id)))
      console.debug('deleteQuote', res)
      return res
    },
    async deleteQuotes () {
      await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('User'), userId)),
          q.Lambda('X', q.Delete(q.Var('X')))
        )
      )
    },
    async getQuote (id: string) {
      const res = await client.query<values.Document<TQuoteDocData>>(q.Get(id))
      return {
        ...res.data,
        id: res.ref.id
      }
    },
    async getQuotes (): Promise<TQuoteDoc[]> {
      const pageHelper = client.paginate(q.Match(q.Index('User'), userId))

      const page = (await pageHelper
        .map((ref: ExprArg) => q.Get(ref)) // This seems to rely on the variable being named "ref", watch out.
        .nextPage()) as values.Document<TQuoteDocData>[]
      return page.map((_) => ({
        ..._.data,
        id: _.ref.id
      }))
    }
  }
}
