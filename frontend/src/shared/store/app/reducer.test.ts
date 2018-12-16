import reducer, { initialState } from './reducer';
import { SETLOCALE } from './actions';

describe('App Reducer', () => {
  it('sets the locale', () => {
    expect(reducer(initialState, { type: SETLOCALE, locale: 'de-DE' })).toEqual({
      locale: 'de-DE',
    });
  });
});
