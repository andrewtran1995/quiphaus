<script lang="ts">
  import Overlay from './Overlay.svelte'
  import Button from './Button.svelte'

  export let buttonText: string
  export let open = false
</script>

<Overlay bind:open>
  <div class="px-4">
    <div class="flex max-w-2xl flex-col rounded-lg bg-white p-4 shadow">
      <slot />
      <Button
        color="green"
        on:click={() => {
          open = !open
        }}>{buttonText}</Button
      >
    </div>
  </div>
</Overlay>
