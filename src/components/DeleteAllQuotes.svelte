<script>
  import { quoteStore } from '../store/quoteStore'
  import Button from './common/Button.svelte'
  import { apiClient } from '../lib/api'
  import { authClient } from '../auth/auth'
</script>

<Button
  color="red"
  full
  on:click={async () => {
    const token = await authClient.getTokenSilently()
    if (!token) {
      console.error('must be signed in to delete quotes')
      return
    }

    await apiClient(token).deleteQuotes()
    await quoteStore.removeAllQuotes()
  }}
>
  Delete all quotes
</Button>
