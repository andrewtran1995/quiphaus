<script lang="ts">
  import type { SvelteComponent } from 'svelte'

  export let icon: SvelteComponent
</script>

<button
  class="rounded-xl p-2 transition-colors hover:bg-emerald-600 hover:text-white focus:ring-4"
  on:click
>
  <svelte:component this={icon} />
</button>
