<script>
  import { quoteStore } from '../store/quoteStore'

  let quoteInput = ''
  const addQuote = async () => {
    await quoteStore.addQuote({ quote: quoteInput, quotee: 'John Doe' })
    quoteInput = ''
  }
</script>

<form class="flex justify-center justify-between md:flex-row flex-col space-y-2 md:space-y-0 !mb-4 w-full" on:submit|preventDefault={addQuote}>
    <input class="bg-green-200 focus:outline-none focus:border-2 focus:border-emerald-600 flex-grow md:mr-4 p-2 rounded-lg transition-colors" bind:value={quoteInput} placeholder="Enter a quote" required>
    <button class="border-2 border-emerald-600 p-2 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors">Add quote</button>
</form>