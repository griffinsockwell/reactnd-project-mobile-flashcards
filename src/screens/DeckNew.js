// node_modules
import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
// api
import * as DecksAPI from '../api/DecksAPI';
// common
import FormInput from '../common/FormInput';
import FormSubmit from '../common/FormSubmit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <FormInput
          label="Title"
          value={title}
          onChangeText={this.handleChangeTitle}
          autoCapitalize="words"
          autoFocus
        />
        <FormSubmit
          submitting={submitting}
          title="Add deck"
          titleSubmitting="Adding deck..."
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}
