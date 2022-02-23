<script lang="ts">
  /* eslint no-use-before-define: "off" */
  import type { TQuote } from './store'
  export let quote: TQuote = { quote: 'This is a quote.', quotee: 'John Doe' }
</script>

<div class="hover:bg-emerald-500 hover:text-gray-100 max-w-full min-w-fit p-6 rounded-xl shadow-md transition-colors w-full">
    <h3 class="text-lg">{quote.quote}</h3>
    <p class="italic">John Doe</p>
</div>