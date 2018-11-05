import { AppT, LocaleT } from './types';
import { SETLOCALE, SETLOCALE_TYPE, TSetLocaleAction } from './actions';

export const initialState: Readonly<AppT> = Object.freeze({
  locale: 'en-US' as LocaleT,
});

export default (state: AppT = initialState, action: TSetLocaleAction): AppT => {
  const { type, ...payload } = action;

  switch (type) {
    case SETLOCALE: {
      return {
        ...state,
        locale: payload.locale,
      };
    }
  }

  return state;
};
