<script lang="ts">
  export let color: 'green' | 'red' = 'green'
  export let full = false
</script>

<button
  class="border-2 font-sans {color === 'green'
    ? 'border-emerald-600'
    : 'border-rose-500'} rounded-lg p-2 transition-colors hover:text-gray-100 focus:text-gray-100 {color ===
  'green'
    ? 'hover:bg-emerald-600'
    : 'hover:bg-rose-500'} {color === 'green'
    ? 'focus:bg-emerald-600'
    : 'focus:bg-rose-500'} {full ? 'w-full' : 'w-fit'} focus:outline-none"
  on:click
>
  <slot />
</button>
