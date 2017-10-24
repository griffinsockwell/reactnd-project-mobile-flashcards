// node_modules
import React from 'react';
import { connect } from 'react-redux';
// actions
import { decksSeed } from '../actions';
// common
import Loading from '../common/Loading';

const decks = {
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

class DeckListSeed extends React.Component {
  componentDidMount() {
    this.props.decksSeed(decks);
  }

  render() {
    return <Loading />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { decksSeed })(DeckListSeed);
