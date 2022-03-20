<script>
  import { quoteStore } from '../store/quoteStore'
  import Quote from './Quote.svelte'
</script>

{#each $quoteStore as quote (quote.id)}
  <Quote {quote} />
{/each}
