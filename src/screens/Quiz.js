// node_modules
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// constants
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  finishedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishedCorrectContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  finishedCorrectCount: {
    color: Colors.green,
    fontSize: 64,
    fontWeight: '700',
  },
  finishedCorrectText: {
    color: Colors.green,
    fontSize: 28,
    fontWeight: '700',
  },
  finishedIncorrectContainer: {
    alignItems: 'center',
  },
  finishedIncorrectCount: {
    color: Colors.red,
    fontSize: 24,
    fontWeight: '700',
  },
  finishedIncorrectText: {
    color: Colors.red,
    fontSize: 14,
    fontWeight: '700',
  },
  quizContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  quizInfo: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  infoText: {
    color: '#ccc',
    fontWeight: '300',
    fontSize: 20,
  },
  questionLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
  },
  questionContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  toggleAnswer: {
    fontWeight: '700',
    fontSize: 12,
    color: '#00F1F4',
  },
  sectionQuestion: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionSelect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selectButton: {
    height: 60,
    width: 80,
    borderRadius: 20,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectText: {
    fontWeight: '700',
    fontSize: 12,
  },
});

export default class Quiz extends React.Component {
  static navigationOptions = {
    title: 'QUIZ',
  };

  state = {
    quizCompleted: false,
    showAnswer: false,
    currentQuestionIndex: 0,
    countIncorrect: 0,
    countCorrect: 0,
  };

  handleCorrectAnswer = () => {
    this.updateQuiz(true);
  };

  handleIncorrectAnswer = () => {
    this.updateQuiz(false);
  };

  updateQuiz = answerCorrect => {
    const { deck } = this.props.navigation.state.params;
    this.setState(state => {
      const currentQuestionIndex = state.currentQuestionIndex + 1;

      let countCorrect = state.countCorrect;
      let countIncorrect = state.countIncorrect;
      if (answerCorrect) {
        countCorrect = countCorrect + 1;
      } else {
        countIncorrect = countIncorrect + 1;
      }

      let quizCompleted = false;
      if (currentQuestionIndex === deck.questions.length) {
        quizCompleted = true;
      }

      return {
        ...state,
        quizCompleted,
        currentQuestionIndex,
        countCorrect,
        countIncorrect,
        showAnswer: false,
      };
    });
  };

  toggleShowAnser = () => {
    this.setState(state => ({ showAnswer: !state.showAnswer }));
  };

  render() {
    const { quizCompleted, currentQuestionIndex, showAnswer } = this.state;
    const { deck } = this.props.navigation.state.params;
    const currentQuestion = deck.questions[currentQuestionIndex];

    let component;
    if (quizCompleted) {
      component = (
        <View style={styles.container}>
          <Text style={styles.infoText}>Finished studying {deck.title}!</Text>

          <View style={styles.finishedContainer}>
            <View style={styles.finishedCorrectContainer}>
              <Text style={styles.finishedCorrectCount}>{this.state.countCorrect}</Text>
              <Text style={styles.finishedCorrectText}>CORRECT</Text>
            </View>

            <View style={styles.finishedIncorrectContainer}>
              <Text style={styles.finishedIncorrectCount}>{this.state.countIncorrect}</Text>
              <Text style={styles.finishedIncorrectText}>INCORRECT</Text>
            </View>
          </View>
        </View>
      );
    } else {
      component = (
        <View style={styles.quizContainer}>
          <View style={styles.quizInfo}>
            <Text style={[styles.infoText, { flex: 1 }]}>Studying {deck.title}</Text>
            <Text style={styles.infoText}>
              {currentQuestionIndex + 1}/{deck.questions.length}
            </Text>
          </View>

          <View style={styles.sectionQuestion}>
            <Text style={styles.questionLabel}>{showAnswer ? 'Answer' : 'Question'}</Text>
            <Text style={styles.questionContent}>
              {showAnswer ? currentQuestion.answer : currentQuestion.question}
            </Text>

            <TouchableOpacity onPress={this.toggleShowAnser}>
              <Text style={styles.toggleAnswer}>SHOW {showAnswer ? 'QUESTION' : 'ANSWER'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sectionSelect}>
            <TouchableOpacity
              style={[styles.selectButton, { borderColor: Colors.red }]}
              onPress={this.handleIncorrectAnswer}>
              <Text style={[styles.selectText, { color: Colors.red }]}>Incorrect</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.selectButton, { borderColor: Colors.green }]}
              onPress={this.handleCorrectAnswer}>
              <Text style={[styles.selectText, { color: Colors.green }]}>Correct</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return component;
  }
}
