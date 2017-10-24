// node_modules
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
// components
import DeckListItem from './DeckListItem';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.black,
  },
});

export default class DeckList extends React.Component {
  renderItem = ({ item }) => <DeckListItem item={item} navigation={this.props.navigation} />;

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        contentContainerStyle={styles.list}
      />
    );
  }
}
