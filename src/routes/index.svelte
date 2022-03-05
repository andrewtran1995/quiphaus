<script>
  /* eslint import/first: "off" */
  import QuoteInput from '../components/QuoteInput.svelte'
  import Feed from '../components/Feed.svelte'
  import Quotes from '../components/Quotes.svelte'
  import { quoteStore } from '../store/quoteStore'
  import DeleteAllQuotes from '../components/DeleteAllQuotes.svelte'
  import InfoDialog from '../components/InfoDialog.svelte'
  import IconButton from '../components/common/IconButton.svelte'
  import QuestionIcon from '../components/common/QuestionIcon.svelte'

  let open = false
</script>

<div
  class="flex flex-row place-items-center justify-center p-6 font-serif font-medium"
>
  <h1 class="text-2xl">quiphaus</h1>
  <IconButton
    icon={QuestionIcon}
    on:click={() => {
      open = true
    }}
  />
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
