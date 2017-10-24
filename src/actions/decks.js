import * as DecksAPI from '../api/DecksAPI';
import * as types from '../types';

export const decksGet = () => async dispatch => {
  try {
    let decks = await DecksAPI.getDecks();
    decks = JSON.parse(decks);
    if (decks === null) {
      decks = {};
    }
    dispatch({ type: types.DECKS_GET, payload: decks });
  } catch (error) {
    console.log(error);
  }
};

export const decksReset = () => ({ type: types.DECKS_RESET });

export const decksSeed = decks => async dispatch => {
  try {
    await DecksAPI.seedDecks(decks);
    dispatch({ type: types.DECKS_GET, payload: decks });
  } catch (error) {
    console.log(error);
  }
};
