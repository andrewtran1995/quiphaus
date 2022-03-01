import { writable } from 'svelte/store'
import { v4 } from 'uuid'
import { db, type TQuoteRow } from './db'

export type TQuote = TQuoteRow

export const quoteStore = (() => {
  const store = writable<TQuote[]>([])

  const refreshFromDb = async () =>
    store.set(await db.quotes.orderBy('createdAt').reverse().toArray())

  return {
    ...store,
    async addQuote (quote: Omit<TQuoteRow, 'id' | 'createdAt'>) {
      await db.quotes.add({ id: v4(), createdAt: new Date(), ...quote })
      await refreshFromDb()
    },
    async init () {
      await refreshFromDb()
    },
    async removeQuote (id: TQuote['id']) {
      await db.quotes.delete(id)
      await refreshFromDb()
    },
    async removeAllQuotes () {
      await db.quotes.clear()
      store.set([])
    }
  }
})()
