import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'UdaciFlashcards';

export const getDecks = () => AsyncStorage.getItem(STORAGE_KEY);

export const seedDecks = decks => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
