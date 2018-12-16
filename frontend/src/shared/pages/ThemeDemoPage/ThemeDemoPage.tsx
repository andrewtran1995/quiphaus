import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import ThemeDemo from '../../components/ThemeDemo/ThemeDemo';
import themes, { Theme } from '../../themes';

interface Props extends RouteComponentProps<{}> {}

export const ThemeDemoPage: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <Switch>
      <Route path={'/dark'}>
        <ThemeDemo theme={themes.dark} />
      </Route>
      <Route path={'/light'}>
        <ThemeDemo theme={themes.light} />
      </Route>
      <Route path={'/primary'}>
        <ThemeDemo theme={themes.primary} />
      </Route>
      <Route path={'/'}>
        <ThemeDemo theme={themes.light} />
      </Route>
    </Switch>
  );
};
