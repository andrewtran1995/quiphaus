<script>
  import Dialog from '../common/Dialog.svelte'
  import Header from '../common/Header.svelte'
  import { isAuthenticated, user } from '../../store/user'
  import Button from '../common/Button.svelte'
  import { auth0 } from '../../auth/auth'
  import { BASE_URL } from '../../lib/url'

  export let open = false
</script>

<Dialog bind:open buttonText="Close">
  <div class="flex w-fit flex-col space-y-2">
    <Header>Settings</Header>
    {#if $isAuthenticated}
      <Button
        on:click={async () => {
          await auth0.logout({ returnTo: BASE_URL })
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
            await auth0.loginWithPopup()
            console.log({ user: await auth0.getUser() })
            isAuthenticated.set(await auth0.isAuthenticated())
            user.set(await auth0.getUser())
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
