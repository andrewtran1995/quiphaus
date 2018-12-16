import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Response, Request } from 'express';
import { getBundles } from 'react-loadable/webpack';
import * as Loadable from 'react-loadable';
// @ts-ignore
import stats from '../../build/react-loadable.json';

// Allow use of fetch server-side
require('isomorphic-fetch');

// import IntlProvider from '../shared/i18n/IntlProvider';
import Html from './components/HTML';
import App from '../shared/App';

const serverRenderer = () => (req: Request, res: Response) => {
  let modules: string[] = [];

  const sheet = new ServerStyleSheet();

  const content = renderToString(
    <Loadable.Capture report={_ => modules.push(_)}>
      <StyleSheetManager sheet={sheet.instance}>
        <Provider store={req.store}>
          <Router location={req.url} context={{}}>
            {/*<IntlProvider>*/}
            <App />
            {/*</IntlProvider>*/}
          </Router>
        </Provider>
      </StyleSheetManager>
    </Loadable.Capture>,
  );

  const bundles = getBundles(stats, modules);
  const state = JSON.stringify(req.store.getState());
  const styleElement = sheet.getStyleElement();

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
          scripts={[
            ...bundles,
            res.locals.assetPath('bundle.js'),
            res.locals.assetPath('vendor.js'),
          ]}
          state={state}
          styleElement={styleElement}
        >
          {content}
        </Html>,
      ),
  );
};

export default serverRenderer;
