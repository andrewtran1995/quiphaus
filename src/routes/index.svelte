<script>
  /* eslint import/first: "off" */
  import QuoteInput from '../components/QuoteInput.svelte'
  import Feed from '../components/Feed.svelte'
  import Quotes from '../components/Quotes.svelte'
  import { quoteStore } from '../store/quoteStore'
  import DeleteAllQuotes from '../components/DeleteAllQuotes.svelte'
</script>

<div class="flex flex-col font-serif font-medium p-6 place-items-center">
    <h1 class="text-2xl">quiphaus</h1>
</div>
<Feed>
    <QuoteInput/>
    {#await quoteStore.init()}
        <p>Loading your quotes ...</p>
    {:then}
        <Quotes/>
        {#if $quoteStore.length > 0}
            <DeleteAllQuotes/>
        {/if}
    {:catch error}
        <p>Something went wrong: {error.message}</p>
    {/await}
</Feed>
