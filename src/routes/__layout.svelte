<script>
  import '../app.css'
  import { dev } from '$app/env'
</script>

<div class="bg-gray-100 h-screen {dev && 'debug-screens'}">
    <slot/>
</div>