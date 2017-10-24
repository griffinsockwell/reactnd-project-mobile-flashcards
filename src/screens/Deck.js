// node_modules
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
// actions
import { deckGet, deckReset } from '../actions';
// common
import Loading from '../common/Loading';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  addCards: {
    color: '#fff',
  },
});

class Deck extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const { title, key } = navigation.state.params;
    return {
      title: title.toUpperCase(),
      headerTitleStyle: {
        color: Colors.getColor(key),
        fontWeight: '700',
        fontSize: 14,
      },
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('CardNew', { key })}>
          <Text style={styles.newCard}>New card</Text>
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    const { key } = this.props.navigation.state.params;
    this.props.deckGet(key);
  }

  componentWillUnmount() {
    this.props.deckReset();
  }

  navigateQuiz = () => {
    const { deck } = this.props;
    this.props.navigation.navigate('Quiz', { deck });
  };

  render() {
    const { loading, deck } = this.props;

    let component;
    if (loading) {
      component = <Loading />;
    } else {
      const cards = deck.questions.length;
      component = (
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.cardCount}>
              {cards} card{cards === 1 ? '' : 's'}
            </Text>
          </View>

          <View style={styles.section}>
            {cards ? (
              <TouchableOpacity style={styles.button} onPress={this.navigateQuiz}>
                <Text style={styles.buttonText}>START</Text>
                <Text style={styles.buttonText}>QUIZ</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.addCards}>Add cards to begin studying!</Text>
            )}
          </View>
        </View>
      );
    }

    return component;
  }
}

const mapStateToProps = state => ({
  loading: state.deck.loading,
  deck: state.deck.deck,
});

export default connect(mapStateToProps, { deckGet, deckReset })(Deck);
