import React from 'react'

export default (props) => (
    <button
        onClick={props.handleDecrement}
        value={props.userInput}
    >
        -
    </button>
);