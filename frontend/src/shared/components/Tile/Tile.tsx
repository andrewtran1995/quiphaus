import * as React from 'react';
import styled from 'styled-components';

import { Theme } from '../../themes';

const TileDiv = styled.div`
  background: ${props => props.theme.altBgColor}
  border-radius: 4px;
  box-shadow: ${props => props.theme.shadow};
  
  font-family: ${props => props.theme.textFont};
  color: ${props => props.theme.textColor};
  font-weight: ${props => props.theme.textRegular};
  
  padding: ${props => props.theme.space};
  margin-bottom: ${props => props.theme.spaceXs};
`;

type Props = {
  theme?: Theme;
};

const Tile: React.StatelessComponent<Props> = (props: Props) => {
  return <TileDiv {...props} />;
};

export default Tile;
