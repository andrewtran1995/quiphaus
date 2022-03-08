<script>
  import '../app.css'
  import { dev } from '$app/env'
</script>

<div
  class="h-full min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 {dev
    ? 'debug-screens'
    : ''}"
>
  <slot />
</div>
