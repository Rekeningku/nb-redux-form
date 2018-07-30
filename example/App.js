import React from 'react';
import { Provider } from 'react-redux';

import ScreenForm from './src/Screen';
import store from './src/redux';

const App = () => (
  <Provider store={store}>
    <ScreenForm />
  </Provider>
);

export default App;
