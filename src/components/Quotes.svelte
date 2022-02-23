<script>
  /* eslint import/first: "off" */
  import { quoteStore } from './store.ts'
  import Quote from './Quote.svelte'
</script>

<div class="flex flex-col place-items-center space-y-2">
    <slot/>
    {#each $quoteStore as quote}
        <Quote quote={quote}/>
    {/each}
</div>