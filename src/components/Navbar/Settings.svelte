<script>
  import Dialog from '../common/Dialog.svelte'
  import Header from '../common/Header.svelte'
  import { isAuthenticated, user } from '../../store/user'
  import Button from '../common/Button.svelte'
  import { authClient } from '../../auth/auth'
  import { BASE_URL } from '../../lib/url'

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
            console.log({ user: await authClient.getUser() })
            isAuthenticated.set(await authClient.isAuthenticated())
            user.set(await authClient.getUser())
          } catch (e) {
            console.error(e)
          }
        }}
      >
        Login
      </Button>
    {/if}
  </div>
</Dialog>
