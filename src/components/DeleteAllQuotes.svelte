<script>
  import { quoteStore } from '../store/quoteStore'
  import Button from './Button.svelte'
</script>

<Button color="red" full on:click={quoteStore.removeAllQuotes}>
  Delete all quotes
</Button>
