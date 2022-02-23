<script>
  import { quoteStore } from '../store/quoteStore'
</script>

<button
        class="border-2 border-rose-500 hover:bg-rose-500 hover:text-gray-100 rounded-lg p-2 w-full transition-colors"
        on:click={() => quoteStore.removeAllQuotes()}
>
    Delete all quotes
</button>