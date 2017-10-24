import * as types from '../types';

const initialState = {
  loading: true,
  decks: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DECKS_GET:
      return { ...state, loading: false, decks: action.payload };
    case types.DECKS_RESET:
      return initialState;
    default:
      return state;
  }
};
