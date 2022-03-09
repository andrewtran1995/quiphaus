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

<style>
  @font-face {
    font-family: 'Cardo';
    src: local(''), url('/static/fonts/Cardo-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Fredoka';
    font-weight: bold;
    src: local(''), url('/static/fonts/Fredoka-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Fredoka';
    font-weight: normal;
    src: local(''), url('/static/fonts/Fredoka-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Fredoka';
    font-weight: 400;
    src: local(''), url('/static/fonts/Fredoka-Light.ttf') format('truetype');
  }
</style>
