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

export const deckAddCard = (key, value) => async dispatch => {
  try {
    await DecksAPI.addCard(key, value);
    dispatch({ type: types.DECK_CARD_ADD, payload: { key, value } });
  } catch (error) {
    console.log(error);
  }
};
