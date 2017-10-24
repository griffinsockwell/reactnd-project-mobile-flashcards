// node_modules
import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
// api
import * as DecksAPI from '../api/DecksAPI';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
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
  sectionSubmit: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default class DeckNew extends React.Component {
  static navigationOptions = {
    title: 'NEW DECK',
  };

  state = {
    submitting: false,
    title: '',
  };

  handleChangeTitle = text => {
    this.setState({ title: text });
  };

  handleSubmit = async () => {
    try {
      const title = this.state.title.trim();
      if (title) {
        this.setState({ submitting: true });
        const key = Date.now().toString();
        const value = { title, questions: [] };
        await DecksAPI.addDeck(key, value);
        const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
            NavigationActions.navigate({ routeName: 'Deck', params: { key, title } }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { submitting, title } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.sectionInput}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={this.handleChangeTitle}
            autoCapitalize="words"
            autoFocus
          />
        </View>
        <View style={styles.sectionSubmit}>
          <Button
            title={submitting ? 'Adding deck...' : 'Add deck'}
            onPress={this.handleSubmit}
            color={Colors.green}
          />
          <ActivityIndicator animating={submitting} color={Colors.green} />
        </View>
      </View>
    );
  }
}
