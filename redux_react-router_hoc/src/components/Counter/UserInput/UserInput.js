import React from 'react';

export default (props) => (
    <div>
        <button
            onClick={props.handleDecrement}
        >
            -
        </button>
        <input 
            type="number"
            onChange={props.handleInputChange} 
        />
        <button
            onClick={props.handleIncrement}
        >
            +
        </button>
    </div>
);