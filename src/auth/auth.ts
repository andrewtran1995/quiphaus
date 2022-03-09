import createAuth0Client, { type Auth0Client } from '@auth0/auth0-spa-js'
import { browser } from '$app/env'

/**
 * @see https://auth0.com/docs/libraries/auth0-single-page-app-sdk
 */
export let auth0: Auth0Client

if (browser) {
  auth0 = await createAuth0Client({
    cacheLocation: 'localstorage',
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    domain: import.meta.env.VITE_AUTH0_DOMAIN
  })
}
