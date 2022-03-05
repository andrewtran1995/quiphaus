<script>
  export let open = false
</script>

{#if open}
  <div
    aria-hidden="true"
    class="fixed inset-0 z-50 items-center justify-center py-4 md:h-full"
  >
    <slot />
  </div>
  <div class="fixed inset-0 z-40 bg-gray-700 bg-opacity-50" />
{/if}
