import * as React from 'react';
import Helmet from 'react-helmet';

type Props = {
  children: any;
  css: string[];
  scripts: string[];
  state: string;
  styleElement: React.ReactNode;
};

export default class HTML extends React.Component<Props> {
  static defaultProps = {
    css: [],
    scripts: [],
    state: '{}',
  };

  render() {
    const head = Helmet.renderStatic();
    const { children, scripts, css, state, styleElement } = this.props;
    return (
      <html lang="">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          {styleElement}
          {css.map(href => {
            return <link key={href} rel="stylesheet" href={href} />;
          })}
          <link
            href="https://fonts.googleapis.com/css?family=Tajawal:700,800,900|Montserrat:400,600"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__PRELOADED_STATE__ = ${state}`,
            }}
          />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {scripts.map(src => {
            return <script key={src} src={src} />;
          })}
        </body>
      </html>
    );
  }
}
