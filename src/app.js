import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
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
    const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
