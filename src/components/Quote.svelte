<script lang="ts">
  import type { TQuote } from '../store/quoteStore'
  export let quote: TQuote
</script>

<div
  class="quote-container w-full rounded-xl p-6 shadow-md transition-colors dark:bg-gray-700"
  tabindex="0"
>
  <h3 class="truncate text-lg">{quote.quote}</h3>
  <div class="flex justify-between text-sm">
    <p>John Doe</p>
    <p>{quote.date.toLocaleDateString()}</p>
  </div>
</div>

<style>
  .quote-container:focus,
  .quote-container:hover {
    @apply bg-emerald-500 text-gray-100 outline-none;
  }
</style>
