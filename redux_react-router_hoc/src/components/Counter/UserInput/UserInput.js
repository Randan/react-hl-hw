import React from 'react';
// import { store } from '../store';

export default (props) => (
    <div>
        <button
            onChange={props.handleDecrement}
        >
            -
        </button>
        <input 
            type="number"
            // value={store.getState().userInput} // TODO: ???
            onChange={props.handleInputChange} 
        />
        <button
            onChange={props.handleIncrement}
        >
            +
        </button>
    </div>
);