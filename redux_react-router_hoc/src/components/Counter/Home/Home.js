import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { store } from '../store';
import UserInput from '../UserInput';

export default () => (
  <div>
    <Provider store={store}>
      <UserInput />
    </Provider>
  </div>
);