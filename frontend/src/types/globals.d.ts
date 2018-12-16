declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;

declare namespace Express {
  export interface Request {
    store?: any;
  }
}

// __SERVER__ and __CLIENT__ defined in webpack
declare const __SERVER__: boolean;
declare const __CLIENT__: boolean;
