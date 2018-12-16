import * as React from 'react';
import * as Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Tile'),
  loading: () => null,
  modules: ['./Tile'],
  // @ts-ignore
  webpack: () => [require.resolveWeak('./Tile')],
});
