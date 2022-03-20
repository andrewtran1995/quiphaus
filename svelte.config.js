import adapter from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import viteCompression from 'vite-plugin-compression'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      build: {
        target: 'esnext',
      },
      plugins: [
        viteCompression({
          algorithm: 'brotliCompress',
          filter: /\.(css|js|json|ttf)$/,
        })
      ]
    }
  },
}

export default config
