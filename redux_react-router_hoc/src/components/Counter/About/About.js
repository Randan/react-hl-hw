import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { store } from '../store';
import InputField from '../UserInput/parts/InputField';

export default () => (
    <Provider store={store}>
        <InputField />
        <p>This is About Page</p>
    </Provider>
);