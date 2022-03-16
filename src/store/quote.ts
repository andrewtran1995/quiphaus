import type { TQuote } from './quoteStore'
import { quoteStore } from './quoteStore'
import { authClient } from '../auth/auth'
import { apiClient } from '../lib/api'
import type { TQuoteRow } from './db'
import type { TQuoteDocApiInput } from '../../api/_storeTypes'
import { isAuthenticated } from './user'

export class QuoteToSave {
  constructor (
    private readonly quote: Omit<TQuote, 'id'> & Partial<Pick<TQuote, 'id'>>
  ) {}

  async save () {
    const doc = await this.saveRemote()
    const localQuote = await this.saveLocal(doc)

    return new Quote({
      ...this.quote,
      id: localQuote.id
    })
  }

  private async saveLocal (extDoc?: { id: string; userId?: string }) {
    return quoteStore.addQuote({
      ...this.quote,
      ...extDoc
    })
  }

  private async saveRemote (): Promise<TQuoteRow | undefined> {
    const isAuthenticated = await authClient.isAuthenticated()
    if (!isAuthenticated) {
      console.log('cannot save remotely, token is missing')
      return undefined
    }

    return apiClient(await authClient.getTokenSilently()).addQuote({
      ...this.quote,
      date: this.quote.date.toISOString()
    })
  }
}

export class Quote {
  constructor (private readonly obj: TQuote) {}

  forApi (): TQuoteDocApiInput {
    return {
      ...this.obj,
      date: this.obj.date.toISOString()
    }
  }

  forLocal (): TQuote {
    return this.obj
  }
}
