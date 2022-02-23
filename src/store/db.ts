import Dexie, { type Table } from 'dexie'
import { v4 } from 'uuid'

export type TQuoteRow = {
  id: string;

  createdAt: Date;

  quote: string;
  quotee: string;
}

export const db = new Dexie('QuiphausDatabase') as Dexie & { quotes: Table<TQuoteRow> }
db.version(1).stores({
  quotes: 'id,createdAt,quote,quotee'
})
db.on('populate', () => {
  db.quotes.add({
    id: v4(),
    createdAt: new Date(),
    quote: 'This is an example quote! Quotes are saved locally in your browser.',
    quotee: 'John Doe'
  })
})
