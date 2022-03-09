<script lang="ts">
  import Overlay from './Overlay.svelte'
  import Button from './Button.svelte'

  export let buttonText: string
  export let open = false

  function handleEscape (event: KeyboardEvent) {
    if (event.key !== 'Escape') {
      return
    }

    open = false
  }
</script>

<svelte:window on:keydown={handleEscape} />

<Overlay bind:open>
  <div class="flex justify-center px-4">
    <div
      class="flex w-full max-w-xl flex-col rounded-lg bg-gray-100 p-4 shadow dark:bg-gray-800"
    >
      <slot />
      <div class="mt-4 flex justify-end">
        <Button
          color="green"
          on:click={() => {
            open = !open
          }}>{buttonText}</Button
        >
      </div>
    </div>
  </div>
</Overlay>
