import { LocaleT } from './types';

export const SETLOCALE = 'app/set-locale';
export type SETLOCALE_TYPE = typeof SETLOCALE;

export const setLocale = (locale: LocaleT) => ({
  type: SETLOCALE,
  locale: locale,
});

export type TSetLocaleAction = ReturnType<typeof setLocale>;

export type LocaleAction = TSetLocaleAction;
