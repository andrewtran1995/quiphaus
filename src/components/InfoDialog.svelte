<script>
  import Dialog from './common/Dialog.svelte'

  export let open = false
</script>

<Dialog buttonText="Got it!" bind:open>
  <div>
    <h1 class="text-lg font-bold">About quiphaus</h1>
    <i>quiphaus</i> is a page that stores memorable quotes (e.g., from friends) locally
    to your browser. Quotes are not saved across devices, and wiping browser data
    will delete your quotes.
  </div>
</Dialog>
