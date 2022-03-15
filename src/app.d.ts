/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
interface ImportMetaEnv {
  readonly VITE_AUTH0_AUD: string
  readonly VITE_AUTH0_CLIENT_ID: string
  readonly VITE_AUTH0_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
