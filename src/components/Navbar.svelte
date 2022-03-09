<script>
  import IconButton from './common/IconButton.svelte'
  import QuestionIcon from './common/QuestionIcon.svelte'
  import InfoDialog from './InfoDialog.svelte'
  import Dialog from './common/Dialog.svelte'
  import Button from './common/Button.svelte'
  import { auth0 } from '../auth/auth'
  import { isAuthenticated, user } from '../store/user'
  import { BASE_URL } from '../lib/url'
  import SettingsIcon from './common/SettingsIcon.svelte'
  import Header from './common/Header.svelte'

  let open = false
  let settingsOpen = false
</script>

<div class="flex flex-row place-items-center justify-center p-6">
  <div class="grow">
    <IconButton
      icon={SettingsIcon}
      on:click={() => {
        settingsOpen = true
      }}
    />
  </div>
  <h1 class="grow-0 cursor-default font-serif text-2xl font-medium">
    quiphaus
  </h1>
  <div class="grow text-right">
    <IconButton
      icon={QuestionIcon}
      on:click={() => {
        open = true
      }}
    />
  </div>
</div>
<Dialog bind:open={settingsOpen} buttonText="Close">
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
<InfoDialog bind:open />
