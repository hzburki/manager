import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import combineReducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBnKaFic6Sg7p5L-26g8kLMgTWL561ntSo',
      authDomain: 'manager-9240b.firebaseapp.com',
      databaseURL: 'https://manager-9240b.firebaseio.com',
      projectId: 'manager-9240b',
      storageBucket: 'manager-9240b.appspot.com',
      messagingSenderId: '752115594814'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(combineReducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
