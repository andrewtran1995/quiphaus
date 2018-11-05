import * as React from 'react';
import styled, { Interpolation } from 'styled-components';
import { Theme } from '../../themes';

type Props = {
  theme?: Theme;
  width?: Interpolation<Props>;
};

const StyledHr = styled.hr`
  border: none;
  border-radius: 4px;

  height: 2px;
  background-color: ${props => props.theme.textColor};

  padding: 0;
  margin: ${props => props.theme.space} 0;
`;

const Separator: React.StatelessComponent<Props> = (props: Props) => <StyledHr {...props} />;

export default Separator;
