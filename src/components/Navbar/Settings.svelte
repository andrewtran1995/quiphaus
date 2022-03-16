<script>
  import Dialog from '../common/Dialog.svelte'
  import Header from '../common/Header.svelte'
  import { isAuthenticated, user } from '../../store/user'
  import Button from '../common/Button.svelte'
  import { authClient } from '../../auth/auth'
  import { BASE_URL } from '../../lib/url'
  import { quoteStore } from '../../store/quoteStore'

  export let open = false
</script>

<Dialog bind:open buttonText="Close">
  <div class="flex w-fit flex-col space-y-2">
    <Header>Settings</Header>
    {#if $isAuthenticated}
      <Button
        on:click={async () => {
          await authClient.logout({ returnTo: BASE_URL })
          isAuthenticated.set(false)
          user.set(null)
        }}
      >
        Logout
      </Button>
    {:else}
      <Button
        on:click={async () => {
          try {
            await authClient.loginWithPopup()
            isAuthenticated.set(await authClient.isAuthenticated())
            user.set(await authClient.getUser())
            open = false
          } catch (e) {
            console.error(e)
          }
        }}
      >
        Login
      </Button>
    {/if}
    <Button
      on:click={async () => {
        await quoteStore.removeAllQuotes()
        const token = await authClient.getTokenSilently()
        if (token) {
          await authClient.logout({ returnTo: BASE_URL })
        }
      }}
    >
      Clear all app data
    </Button>
  </div>
</Dialog>
