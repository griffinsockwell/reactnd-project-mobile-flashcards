// node_modules
import React from 'react';
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  sectionSubmit: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const FormSubmit = props => {
  return (
    <View style={styles.sectionSubmit}>
      <Button
        title={props.submitting ? props.titleSubmitting : props.title}
        onPress={props.onPress}
        color={Colors.green}
      />
      <ActivityIndicator animating={props.submitting} color={Colors.green} />
    </View>
  );
};

export default FormSubmit;
