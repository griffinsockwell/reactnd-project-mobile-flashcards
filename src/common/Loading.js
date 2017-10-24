// node_modules
// node_modules
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator color={Colors.green} />
  </View>
);

export default Loading;
