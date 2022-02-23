<script>
  import QuoteInput from '../components/QuoteInput.svelte'
  import Feed from '../components/Feed.svelte'
  import Quotes from '../components/Quotes.svelte'
</script>

<div class="flex flex-col font-serif font-medium p-6 place-items-center">
    <h1 class="text-2xl">quiphaus</h1>
</div>
<Feed>
    <Quotes/>
    <QuoteInput/>
</Feed>
