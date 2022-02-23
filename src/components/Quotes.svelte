<script>
  import { quoteStore } from './store.ts'
  import Quote from './Quote.svelte'

  let quoteInstances = []
  quoteStore.subscribe((value) => { quoteInstances = value })
</script>

<div class="flex flex-col place-items-center space-y-2">
    <slot/>
    {#each quoteInstances as quote}
        <Quote quote={quote}/>
    {/each}
</div>