import * as React from 'react';
import styled, { Interpolation } from 'styled-components';

export interface Props {
  fluid?: boolean;
  css?: Interpolation<Props>;
}

export const Grid = styled.div`
  display: block;
  padding: 0;
  width: ${(props: Props) => (props.fluid ? '100%' : '900px')};
  max-width: 100%;
  margin: ${(props: Props) => (props.fluid ? 0 : '0 auto')};

  ${props => props.css};
`;

export default Grid;
