<script>
  import { quoteStore } from '../store/quoteStore'
</script>

<button
  class="w-full rounded-lg border-2 border-rose-500 p-2 transition-colors hover:bg-rose-500 hover:text-gray-100"
  on:click={() => quoteStore.removeAllQuotes()}
>
  Delete all quotes
</button>
