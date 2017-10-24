import * as types from '../types';

const initialState = {
  loading: true,
  deck: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DECK_GET:
      return { ...state, loading: false, deck: action.payload };
    case types.DECK_RESET:
      return initialState;
    case types.DECK_CARD_ADD: {
      const deck = { ...state.deck, questions: action.payload.value };
      return { ...state, deck };
    }
    default:
      return state;
  }
};
