import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { store } from '../store';
import UserInput from '../UserInput';

export default () => (
    <Provider store={store}>
        <UserInput />
        <p>This is Home Page</p>
    </Provider>
);