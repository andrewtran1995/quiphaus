import { createGlobalStyle, DefaultTheme, GlobalStyleClass } from 'styled-components';
import { Theme } from './themes';

type Props = {};

export const GlobalStyle: GlobalStyleClass<any, Theme> = createGlobalStyle`

  html {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    
    font-family: ${props => props.theme.textFont};
  }
  
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  label {
    font-family: ${props => props.theme.displayFont};
    font-weight: ${props => props.theme.displayExtraBold};
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.25rem;
  }
  
  h3 {
    font-size: 1.7rem;
  }
  
  h4 {
    font-size: 1.4rem;
  }
  
  h5 {
    font-size: 1.2rem;
  }
`;
