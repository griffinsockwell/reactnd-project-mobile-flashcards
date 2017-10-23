// node_modules
import React from 'react';
import { StackNavigator } from 'react-navigation';
// constants
import Colors from '../constants/Colors';
// screens
import CardNew from '../screens/CardNew';
import Deck from '../screens/Deck';
import DeckNew from '../screens/DeckNew';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';

const routeConfigMap = {
  Home: {
    screen: Home,
  },
  Deck: {
    screen: Deck,
  },
  DeckNew: {
    screen: DeckNew,
  },
  CardNew: {
    screen: CardNew,
  },
  Quiz: {
    screen: Quiz,
  },
};
const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: Colors.black,
    },
    headerTitleStyle: {
      color: Colors.green,
      fontWeight: '700',
      fontSize: 14,
    },
    headerBackTitle: null,
    headerTintColor: '#fff',
  },
};
const RootNavigation = StackNavigator(routeConfigMap, stackConfig);

export default RootNavigation;
