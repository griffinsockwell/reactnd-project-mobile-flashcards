// node_modules
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import orderBy from 'lodash/orderBy';
// components
import DeckListItem from './DeckListItem';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    backgroundColor: Colors.black,
  },
});

export default class DeckList extends React.Component {
  renderItem = ({ item }) => <DeckListItem item={item} navigation={this.props.navigation} />;

  render() {
    const data = orderBy(this.props.data, 'title', 'asc');
    return (
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={this.renderItem}
        contentContainerStyle={styles.list}
      />
    );
  }
}
