import { writable } from 'svelte/store'
import { v4 } from 'uuid'
import { db, type TQuoteRow } from './db'

export type TQuote = TQuoteRow

export const quoteStore = (() => {
  const store = writable<TQuote[]>([])

  const refreshFromDb = async () =>
    store.set(await db.quotes.orderBy('date').reverse().toArray())

  return {
    ...store,
    async addQuote (quote: Omit<TQuoteRow, 'id'>) {
      const row = { id: v4(), ...quote }
      await db.quotes.add(row)
      await refreshFromDb()
      return row
    },
    async init () {
      await refreshFromDb()
    },
    async removeQuote (id: TQuote['id']) {
      await db.quotes.delete(id)
      await refreshFromDb()
    },
    async removeAllQuotes (this: void) {
      await db.quotes.clear()
      store.set([])
    }
  }
})()
