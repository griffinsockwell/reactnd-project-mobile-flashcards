// node_modules
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// src/constants
import Colors from './src/constants/Colors';
// src/navigation
import RootNavigation from './src/navigation/RootNavigation';
// src/reducers
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => {
    return Promise.all([Asset.loadAsync([]), Font.loadAsync([MaterialIcons.font])]);
  };

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    let statusBar =
      Platform.OS === 'ios' ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <View style={styles.statusBarUnderlay} />
      );

    let component;
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      component = (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      component = (
        <Provider store={store}>
          <View style={styles.container}>
            {statusBar}
            <RootNavigation />
          </View>
        </Provider>
      );
    }

    return component;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
