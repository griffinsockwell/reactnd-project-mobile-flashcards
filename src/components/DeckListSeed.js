// node_modules
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
// actions
import { decksSeed } from '../actions';
// constants
import Colors from '../constants/Colors';

export const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class DeckListSeed extends React.Component {
  componentDidMount() {
    this.props.decksSeed(decks);
  }

  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={Colors.green} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { decksSeed })(DeckListSeed);
