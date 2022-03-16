import Dexie, { type Table } from 'dexie'
import { v4 } from 'uuid'

export type TQuoteRow = {
  // Either represents an ID known only to local storage, or
  // the ID used by the external store.
  id: string

  date: Date
  quote: string
  quotee: string
  // Presence implies that it has been synced to
  // the external store.
  userId?: string
}

/**
 * Local quotes store that can function as an offline cache.
 */
export const db = new Dexie('QuiphausDatabase') as Dexie & {
  quotes: Table<TQuoteRow>
}
db.version(2).stores({
  quotes: 'id,date,quote,quotee,userId'
})
db.on('populate', async () => {
  await db.quotes.add({
    id: v4(),
    date: new Date(),
    quote:
      'This is an example quote! Quotes are saved locally in your browser.',
    quotee: 'John Doe'
  })
})
