<script>
  import '../app.css'
  import { dev } from '$app/env'
</script>

<div class="h-screen bg-gray-100 {dev ? 'debug-screens' : ''}">
  <slot />
</div>
