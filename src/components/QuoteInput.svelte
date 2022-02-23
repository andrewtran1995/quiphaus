<script>
  import { quoteStore } from './store.ts'

  let quoteInput = ''

  const addQuote = () =>
    quoteStore.update((value) => {
      const newValue = [...value, { quotee: 'John Doe', quote: quoteInput }]
      quoteInput = ''

      return newValue
    })
</script>

<div class="flex justify-center">
    <input class="bg-green-200 m-6 p-2 rounded-lg transition-colors" bind:value={quoteInput} required>
    <button on:click={addQuote}>Add quote</button>
</div>