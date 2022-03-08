import { build, files, version } from '$service-worker'

// https://dev.to/100lvlmaster/create-a-pwa-with-sveltekit-svelte-a36
const cacheName = `cache${version}`
const toCache = build.concat(files)

declare const self: ServiceWorkerGlobalScope

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(toCache))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      await Promise.all(
        keys
          .filter((_) => _ !== cacheName)
          .map(async (_) => await caches.delete(_))
      )
      await self.clients.claim()
    })
  )
})

async function fetchAndCache (request: Request) {
  const cache = await caches.open(`offline${version}`)

  try {
    const response = await fetch(request)
    cache.put(request, response.clone()).catch(() => {
      /* do nothing */
    })

    return response
  } catch (e) {
    const response = await cache.match(request)
    if (response) {
      return response
    }

    console.error('[ServiceWorker] failed to fetch request', e)

    return new Response('failed to fetch request')
  }
}

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async () =>
      (await caches.match(event.request)) ??
      (await fetchAndCache(event.request)))()
  )
})
