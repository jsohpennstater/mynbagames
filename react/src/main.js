import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import configureStore from './redux/store'
import { Provider } from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }]
}

let store = configureStore(initialState)

$(function() {
  ReactDOM.render((
    <Provider store={store}>
      <App/>
    </Provider>
  ), document.getElementById('app'))
});
