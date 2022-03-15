import type { TQuote } from '../store/quoteStore'
import type { TQuoteDoc, TQuoteDocApiInput } from '../../api/_storeTypes'

const API_URL = '/api'

const API = {
  QUOTE: `${API_URL}/quote`,
  QUOTES: `${API_URL}/quotes`
}

export function apiClient (token: string) {
  return {
    async addQuote (quote: TQuoteDocApiInput) {
      const res = await fetch(API.QUOTE, {
        headers: {
          ...authHeader(token),
          ...jsonContentHeader()
        },
        method: 'POST',
        body: JSON.stringify(quote)
      })

      return transformDate((await res.json()) as TQuoteDoc)
    },
    async deleteQuote (id: string) {
      const res = await fetch(`${API.QUOTE}?id=${id}`, {
        headers: {
          ...authHeader(token)
        },
        method: 'DELETE'
      })
      return transformDate((await res.json()) as TQuoteDoc)
    },
    async deleteQuotes () {
      await fetch(`${API.QUOTES}`, {
        headers: {
          ...authHeader(token)
        },
        method: 'DELETE'
      })
    },
    async getQuote (id: string) {
      const res = await fetch(`${API.QUOTE}?id=${id}`, {
        headers: {
          ...authHeader(token)
        }
      })

      return transformDate((await res.json()) as TQuoteDoc)
    },
    async getQuotes () {
      const res = await fetch(`${API.QUOTES}`, {
        headers: {
          ...authHeader(token)
        }
      })

      return ((await res.json()) as TQuoteDoc[]).map(transformDate)
    }
  }
}

function authHeader (token: string) {
  return {
    Authorization: `Bearer ${token}`
  }
}

function jsonContentHeader () {
  return {
    'Content-Type': 'application/json'
  }
}

function transformDate (quote: TQuoteDoc): TQuote {
  return {
    ...quote,
    date: new Date(quote.date)
  }
}
