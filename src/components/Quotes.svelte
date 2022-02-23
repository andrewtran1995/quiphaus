<script>
  /* eslint import/first: "off" */
  import { quoteStore } from './store.ts'
  import Quote from './Quote.svelte'
</script>

<Quote/>
<Quote/>
{#each $quoteStore as quote}
    <Quote {quote}/>
{/each}