<script>
  /* eslint import/first: "off" */
  import QuoteInput from '../components/QuoteInput.svelte'
  import Feed from '../components/Feed.svelte'
  import Quotes from '../components/Quotes.svelte'
  import { quoteStore } from '../store/quoteStore'
  import DeleteAllQuotes from '../components/DeleteAllQuotes.svelte'
  import Button from '../components/Button.svelte'
  import InfoDialog from '../components/InfoDialog.svelte'

  let open = false
</script>

<div class="flex flex-col place-items-center p-6 font-serif font-medium">
  <h1 class="text-2xl">quiphaus</h1>
  <Button
    on:click={() => {
      open = true
    }}>What's this?</Button
  >
</div>
<Feed>
  <QuoteInput />
  {#await quoteStore.init()}
    <p>Loading your quotes ...</p>
  {:then}
    <Quotes />
    {#if $quoteStore.length > 0}
      <DeleteAllQuotes />
    {/if}
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</Feed>
<InfoDialog bind:open />
