// node_modules
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// components
import DeckList from '../components/DeckList';
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

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'FLASHCARDS',
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('DeckNew')}>
        <Text style={styles.newDeck}>New deck</Text>
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <DeckList navigation={this.props.navigation} />
      </View>
    );
  }
}
