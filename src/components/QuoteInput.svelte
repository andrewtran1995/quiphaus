<script lang="ts">
  import Button from './common/Button.svelte'
  import { QuoteToSave } from '../store/quote'

  let quoteInput = ''
  const addQuote = async () => {
    const newQuote = new QuoteToSave({
      date: new Date(),
      quote: quoteInput,
      quotee: 'John Doe'
    })

    await newQuote.save()

    quoteInput = ''
  }
</script>

<form
  class="!mb-4 flex w-full flex-col justify-center justify-between space-y-2 md:flex-row md:space-y-0"
  on:submit|preventDefault={addQuote}
>
  <input
    class="flex-grow rounded-lg border-2 border-transparent bg-green-200 p-2 text-gray-900 transition-colors focus:border-emerald-600 focus:outline-none md:mr-4"
    bind:value={quoteInput}
    placeholder="Enter a quote"
    required
  />
  <Button>Add quote</Button>
</form>
