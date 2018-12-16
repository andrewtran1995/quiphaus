import { Interpolation } from 'styled-components';

export interface Theme<P = any> extends Record<string, Interpolation<P>> {
  bgColor;
  altBgColor;
  headerColor?;
  textColor;
  primary;

  shadow;
  shadowLight;
  shadowDark;

  spaceXs;
  spaceSm;
  space;
  spaceLg;
  spaceXl;

  displayFont;
  textFont;

  displayBold;
  displayExtraBold;
  displayBlack;

  textRegular;
  textSemiBold;
}

export const SharedThemeItems = {
  displayFont: `'Tajawal', -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif`,
  displayBold: 700,
  displayExtraBold: 800,
  displayBlack: 900,

  textFont: `'Montserrat',-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif`,
  textRegular: 400,
  textSemiBold: 600,

  spaceXs: '0.4rem',
  spaceSm: '0.6rem',
  space: '1rem',
  spaceLg: '1.5rem',
  spaceXl: '2.5rem',
};

export enum Colors {
  offwhite = '#F9F9F9',
  white = '#FCFCFC',
  offblack = '#222222',
  black = '#201012',
  primary = '#41C0B0',
}

const LightTheme: Theme = {
  bgColor: Colors.white,
  altBgColor: Colors.offwhite,
  textColor: Colors.offblack,
  primary: Colors.primary,
  shadowLight: 'rgba(62, 62, 62, 0.1) 0 1px 5px',
  shadow: 'rgba(62, 62, 62, 0.2) 0 2px 6px',
  shadowDark: 'rgba(62, 62, 62, 0.3) 0 3px 8px',
  ...SharedThemeItems,
};

const DarkTheme: Theme = {
  bgColor: Colors.offblack,
  altBgColor: Colors.black,
  textColor: Colors.offwhite,
  primary: Colors.primary,
  shadowLight: 'rgba(21, 21, 21, 0.7) 0 1px 5px',
  shadow: 'rgba(21, 21, 21, 0.9) 0 2px 6px',
  shadowDark: 'rgba(21, 21, 21, 1) 0 3px 8px',
  ...SharedThemeItems,
};

const PrimaryTheme: Theme = {
  bgColor: Colors.primary,
  altBgColor: Colors.primary,
  headerColor: Colors.white,
  textColor: Colors.white,
  primary: Colors.offwhite,
  shadowLight: 'rgba(62, 62, 62, 0.2) 0 1px 5px',
  shadow: 'rgba(62, 62, 62, 0.4) 0 2px 6px',
  shadowDark: 'rgba(62, 62, 62, 0.6) 0 3px 8px',
  ...SharedThemeItems,
};

export default {
  dark: DarkTheme,
  light: LightTheme,
  primary: PrimaryTheme,
};
