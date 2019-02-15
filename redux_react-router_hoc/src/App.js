import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Provider from 'react-redux/es/components/Provider';
import { store } from './components/Counter/store';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Counter />
                </Provider>
            </div>
        );
    }
}

export default App;
