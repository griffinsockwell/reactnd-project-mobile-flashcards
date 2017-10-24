// node_modules
import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// actions
import { deckAddCard } from '../actions';
// common
import FormInput from '../common/FormInput';
import FormSubmit from '../common/FormSubmit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

class CardNew extends React.Component {
  static navigationOptions = {
    title: 'NEW CARD',
  };

  state = {
    submitting: false,
    question: '',
    answer: '',
  };

  handleChangeQuestion = text => {
    this.setState({ question: text });
  };

  handleChangeAnswer = text => {
    this.setState({ answer: text });
  };

  handleSubmit = async () => {
    try {
      const question = this.state.question.trim();
      const answer = this.state.answer.trim();
      if (question && answer) {
        this.setState({ submitting: true });
        const { navigation, deck } = this.props;
        const { key } = navigation.state.params;
        const value = [...deck.questions, { question, answer }];
        await this.props.deckAddCard(key, value);
        this.props.navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { submitting, question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <FormInput
          label="Question"
          value={question}
          onChangeText={this.handleChangeQuestion}
          autoCapitalize="sentences"
          autoFocus
        />
        <FormInput
          label="Answer"
          value={answer}
          onChangeText={this.handleChangeAnswer}
          autoCapitalize="sentences"
        />
        <FormSubmit
          submitting={submitting}
          title="Add card"
          titleSubmitting="Adding card..."
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({ deck: state.deck.deck });

export default connect(mapStateToProps, { deckAddCard })(CardNew);
