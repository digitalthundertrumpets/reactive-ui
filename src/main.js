import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import TestContainer from './containers/TestContainer';

// Copies the index.html file into the Dist folder
require('file?name=[name].[ext]!./index.html');

ReactDOM.render(
  <Provider store={store}>
    <TestContainer />
  </Provider>,
  document.getElementById('main')
);
