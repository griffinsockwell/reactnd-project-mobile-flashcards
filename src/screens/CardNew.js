// node_modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class CardNew extends React.Component {
  static navigationOptions = {
    title: 'NEW CARD',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff' }}>CardNew</Text>
      </View>
    );
  }
}
