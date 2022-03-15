// TODO: Look into why IDE type-hinting fails unless both of these are specified.
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      readonly AUTH0_SIGNING_KEY_CERT: string
      readonly FAUNA_ADMIN_KEY: string
      readonly VITE_AUTH0_AUD: string
      readonly VITE_AUTH0_CLIENT_ID: string
      readonly VITE_AUTH0_DOMAIN: string
    }
  }
}

export namespace NodeJS {
  export interface ProcessEnv {
    readonly AUTH0_SIGNING_KEY_CERT: string
    readonly FAUNA_ADMIN_KEY: string
    readonly VITE_AUTH0_AUD: string
    readonly VITE_AUTH0_CLIENT_ID: string
    readonly VITE_AUTH0_DOMAIN: string
  }
}
