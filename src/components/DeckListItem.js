// node_modules
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deckColor: {
    height: 8,
    width: 8,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  cardCount: {
    color: 'lightgray',
  },
});

export default class DeckListItem extends React.Component {
  navigateDeck = () => {
    const { key, title } = this.props.item;
    this.props.navigation.navigate('Deck', { key, title });
  };

  render() {
    const { item } = this.props;
    const backgroundColor = Colors.getColor(item.key);
    const cards = item.questions.length;

    return (
      <TouchableOpacity style={styles.item} onPress={this.navigateDeck}>
        <View style={styles.container}>
          <View style={[styles.deckColor, { backgroundColor }]} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.cardCount}>
            {cards} card{cards === 1 ? '' : 's'}
          </Text>
          <View style={{ flex: 1 }} />
          <MaterialIcons name="keyboard-arrow-right" size={32} color="gray" />
        </View>
      </TouchableOpacity>
    );
  }
}
