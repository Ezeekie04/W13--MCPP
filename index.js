import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'; // pastikan path benar

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(Root);
