import * as DecksAPI from '../api/DecksAPI';
import * as types from '../types';

export const deckGet = key => async dispatch => {
  try {
    let decks = await DecksAPI.getDecks();
    decks = JSON.parse(decks);
    const deck = { key, ...decks[key] };
    dispatch({ type: types.DECK_GET, payload: deck });
  } catch (error) {
    console.log(error);
  }
};

export const deckReset = () => ({ type: types.DECK_RESET });
