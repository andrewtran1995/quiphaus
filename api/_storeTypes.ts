export type TQuoteDocData = {
  date: string
  quote: string
  quotee: string
  userId: string
}
export type TQuoteDoc = TQuoteDocData & { id: string }
export type TQuoteDocApiInput = Omit<TQuoteDocData, 'userId'>
