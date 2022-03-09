<script>
  import Dialog from './common/Dialog.svelte'
  import Header from './common/Header.svelte'
  import { onMount } from 'svelte'
  import { isAuthenticated, user } from '../store/user'

  export let open = false

  let isDarkMode = false
  onMount(() => {
    isDarkMode = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  })
</script>

<Dialog buttonText="Got it!" bind:open>
  <div class="space-y-4">
    <div>
      <Header>About quiphaus</Header>
      <div class="space-y-2">
        <div>
          <i>quiphaus</i> is a single-page app that stores memorable quotes from
          friends locally to your browser. Quotes are not saved across devices, and
          wiping browser data will delete your quotes.
        </div>
        <div>
          Simple sign-ons (managed via <a
            class="underline"
            href="https://auth0.com/">Auth0</a
          >) will allow for cross-device, persisted quotes in the future.
        </div>
      </div>
    </div>
    <div>
      <Header>App information</Header>
      <ul class="list-inside list-disc">
        <li><b>Logged in</b> - {$isAuthenticated ? 'yes' : 'no'}</li>
        <li><b>Current user</b> - {$user?.email ?? 'none'}</li>
        <li><b>Dark mode</b> - {isDarkMode ? 'enabled' : 'disabled'}</li>
      </ul>
    </div>
  </div>
</Dialog>
