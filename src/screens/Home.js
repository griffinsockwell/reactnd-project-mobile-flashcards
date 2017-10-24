// node_modules
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
// actions
import { decksGet, decksReset } from '../actions';
// common
import Loading from '../common/Loading';
// components
import DeckList from '../components/DeckList';
import DeckListSeed from '../components/DeckListSeed';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  newDeck: {
    color: '#fff',
    fontWeight: '700',
  },
});

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'FLASHCARDS',
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('DeckNew')}>
        <Text style={styles.newDeck}>New deck</Text>
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this.props.decksGet();
  }

  componentWillUnmount() {
    this.props.decksReset();
  }

  render() {
    const { loading, decks } = this.props;

    const data = [];
    Object.entries(decks).forEach(([key, value]) => {
      data.push({ key, ...value });
    });

    let component;
    if (loading) {
      component = <Loading />;
    } else if (!data.length) {
      component = <DeckListSeed />;
    } else {
      component = (
        <View style={styles.container}>
          <DeckList data={data} navigation={this.props.navigation} />
        </View>
      );
    }

    return component;
  }
}

const mapStateToProps = state => ({
  loading: state.decks.loading,
  decks: state.decks.decks,
});

export default connect(mapStateToProps, { decksGet, decksReset })(Home);
