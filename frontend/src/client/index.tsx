import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import * as Loadable from 'react-loadable';

import App from '../shared/App';
// import IntlProvider from '../shared/i18n/IntlProvider';
import { configureStore } from '../shared/store';

// @ts-ignore
const browserHistory = window.browserHistory || createHistory();
const store =
  // @ts-ignore
  window.store ||
  // @ts-ignore
  configureStore({
    // @ts-ignore
    initialState: window.__PRELOADED_STATE__,
    middleware: [routerMiddleware(browserHistory)],
  });

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store}>
      <Router history={browserHistory}>
        {/*<IntlProvider>*/}
        <App />
        {/*</IntlProvider>*/}
      </Router>
    </Provider>,
    document.getElementById('app'),
  );

  if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    if (module.hot) {
      // @ts-ignore
      module.hot.accept();
    }

    // @ts-ignore
    if (!window.store || !window.browserHistory) {
      // @ts-ignore
      window.browserHistory = browserHistory;
      // @ts-ignore
      window.store = store;
    }
  }
});
