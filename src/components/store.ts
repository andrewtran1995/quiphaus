import { writable } from "svelte/store";

export type TQuote = {
  quotee: string;
  quote: string;
};

export const quoteStore = writable<TQuote[]>([]);