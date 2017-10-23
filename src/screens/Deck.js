// node_modules
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// constants
import Colors from '../constants/Colors';
// utils
import decks from '../utils/decks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  newCard: {
    color: '#fff',
    fontWeight: '700',
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardCount: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.green,
    fontWeight: '700',
    fontSize: 12,
  },
});

export default class Deck extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: decks[navigation.state.params.key].title.toUpperCase(),
    headerTitleStyle: {
      color: Colors.getColor(navigation.state.params.key),
      fontWeight: '700',
      fontSize: 14,
    },
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('CardNew')}>
        <Text style={styles.newCard}>New card</Text>
      </TouchableOpacity>
    ),
  });

  navigateQuiz = () => {
    const { key } = this.props.navigation.state.params;
    this.props.navigation.navigate('Quiz', { key });
  };

  render() {
    const { key } = this.props.navigation.state.params;
    const deck = decks[key];
    const cards = deck.questions.length;

    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardCount}>
            {cards} card{cards === 1 ? '' : 's'}
          </Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.button} onPress={this.navigateQuiz}>
            <Text style={styles.buttonText}>START</Text>
            <Text style={styles.buttonText}>QUIZ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
