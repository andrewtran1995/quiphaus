import * as React from 'react';
import { RouteComponentProps, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import Grid from '../Grid/index';

import Separator from '../Separator/Separator';
import Tile from '../Tile/Tile';
import { GlobalStyle } from '../../styles';
import themes, { Theme } from '../../themes';

interface Props {
  theme: Theme;
}

const ThemeDemo = (props: Props) => (
  <ThemeProvider theme={props.theme}>
    <Grid>
      <h1>quippy</h1>
      <Separator width={300} />
      <br />
      <Tile theme={themes.dark}>
        Hello! I'm a tile, from the dark side.
        <br /> I have cookies.
      </Tile>
      <Tile theme={themes.light}>Hi! I'm a light tile, and I don't have cookies. :(</Tile>
      <Tile theme={themes.primary}>Hi! I'm a primary tile, and I've got the powah!</Tile>
      <GlobalStyle />
    </Grid>
  </ThemeProvider>
);

export default ThemeDemo;
