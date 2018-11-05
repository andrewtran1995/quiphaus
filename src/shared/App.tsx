import * as React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
// import { translate } from 'react-i18next';
import { setLocale } from './store/app/actions';
import { bindActionCreators } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import Tile from './components/Tile/Tile';
import themes from './themes';
import Separator from './components/Separator/Separator';
import { GlobalStyle } from './styles';
import Grid from './components/Grid';
import { Route, Switch } from 'react-router';
import { ThemeDemoPage } from './pages/ThemeDemoPage/ThemeDemoPage';

const svg = require('./assets/react.svg');

const TestStyledComponent = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 200px;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const AnotherStyledTestComponent = styled.div`
  background: red;
  color: aliceblue;
  border-radius: 5px;
  width: 100%;
`;

type Props = Actions &
  OwnProps &
  Selectors & {
    // t: (string) => string,
  };

type Actions = {
  setLocale: typeof setLocale;
};

type OwnProps = {};

type Selectors = {};

class App extends React.PureComponent<Props> {
  render() {
    // const { t } = this.props;

    return (
      <>
        <Helmet defaultTitle={'Quippy'} />
        <Switch>
          <Route path={'*'} component={ThemeDemoPage} />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps: OwnProps): Actions =>
  bindActionCreators(
    {
      setLocale,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(App);
