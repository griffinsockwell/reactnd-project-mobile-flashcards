// node_modules
import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// actions
import { deckAddCard } from '../actions';
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
      <View style={styles.container}>
        <View style={styles.sectionInput}>
          <Text style={styles.label}>Question</Text>
          <TextInput
            style={styles.input}
            value={question}
            onChangeText={this.handleChangeQuestion}
            autoCapitalize="sentences"
            autoFocus
          />
        </View>
        <View style={styles.sectionInput}>
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={this.handleChangeAnswer}
            autoCapitalize="sentences"
          />
        </View>
        <View style={styles.sectionSubmit}>
          <Button
            title={submitting ? 'Adding card...' : 'Add card'}
            onPress={this.handleSubmit}
            color={Colors.green}
          />
          <ActivityIndicator animating={submitting} color={Colors.green} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ deck: state.deck.deck });

export default connect(mapStateToProps, { deckAddCard })(CardNew);
