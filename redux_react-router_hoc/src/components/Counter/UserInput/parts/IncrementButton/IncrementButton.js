import React from 'react'

export default (props) => (
    <button
        onClick={props.handleIncrement}
        value={props.userInput}
    >
        +
    </button>
);