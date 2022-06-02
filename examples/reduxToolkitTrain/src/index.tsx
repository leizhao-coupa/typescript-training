import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.querySelector('#root') as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
