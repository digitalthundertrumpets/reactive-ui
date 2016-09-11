import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import MainContainer from './containers/MainContainer';

// Copies the index.html file into the Dist folder
require('file?name=[name].[ext]!./index.html');

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('main')
);
