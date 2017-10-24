import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'UdaciFlashcards:decks';

export const getDecks = () => AsyncStorage.getItem(STORAGE_KEY);

export const seedDecks = decks => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));

export const addDeck = (key, value) =>
  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ [key]: value }));

export const addCard = (key, value) =>
  AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ [key]: { questions: value } }));
