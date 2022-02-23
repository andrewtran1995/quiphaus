<script lang="ts">
  /* eslint no-use-before-define: "off" */
  import type { TQuote } from '../store/quoteStore'
  export let quote: TQuote
</script>

<div class="hover:bg-emerald-500 hover:text-gray-100 max-w-full min-w-fit p-6 rounded-xl shadow-md transition-colors w-full">
    <h3 class="text-lg">{quote.quote}</h3>
    <div class="flex justify-between text-sm">
        <p>John Doe</p>
        <p>{quote.createdAt.toLocaleDateString()}</p>
    </div>
</div>