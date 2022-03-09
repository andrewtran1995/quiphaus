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
      <i>quiphaus</i> is a page that stores memorable quotes (e.g., from friends)
      locally to your browser. Quotes are not saved across devices, and wiping browser
      data will delete your quotes.
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
