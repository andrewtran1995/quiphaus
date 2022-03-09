<script>
  import QuoteInput from '../components/QuoteInput.svelte'
  import Feed from '../components/Feed.svelte'
  import Quotes from '../components/Quotes.svelte'
  import { quoteStore } from '../store/quoteStore'
  import DeleteAllQuotes from '../components/DeleteAllQuotes.svelte'
  import Navbar from '../components/Navbar.svelte'
  import { auth0 } from '../auth/auth'
  import { onMount } from 'svelte'
  import { isAuthenticated, user } from '../store/user'
  import Body from '../components/Body.svelte'

  onMount(async () => {
    isAuthenticated.set(await auth0.isAuthenticated())
    user.set(await auth0.getUser())
  })
</script>

<Body>
  <Navbar />
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
</Body>
