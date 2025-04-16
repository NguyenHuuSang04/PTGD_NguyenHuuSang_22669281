import React from 'react';
import { Provider } from 'react-redux';
import store from './Bai_01/store';
import Counter from './Bai_01/Counter';

import './App.css';

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}