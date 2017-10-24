// node_modules
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionInput: {
    paddingVertical: 10,
  },
  label: {
    color: '#fff',
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 40,
    paddingLeft: 10,
    color: '#fff',
  },
});

const FormInput = props => {
  return (
    <View style={styles.sectionInput}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCapitalize={props.autoCapitalize}
        autoFocus={props.autoFocus}
      />
    </View>
  );
};

export default FormInput;
