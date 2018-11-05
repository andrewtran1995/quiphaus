import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

export const configureStore = ({ initialState = {}, middleware = [] } = {}) => {
  const devtools =
    typeof window !== 'undefined' &&
    // @ts-ignore
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  const composeEnhancers = devtools || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...[].concat(...middleware))),
  );

  if (process.env.NODE_ENV !== 'production') {
    // @ts-ignore
    if (module.hot) {
      // @ts-ignore
      module.hot.accept('./rootReducer', () =>
        store.replaceReducer(require('./rootReducer').default),
      );
    }
  }

  return store;
};

export default configureStore;
