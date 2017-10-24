// node_modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class DeckNew extends React.Component {
  static navigationOptions = {
    title: 'NEW DECK',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>DeckNew</Text>
      </View>
    );
  }
}
