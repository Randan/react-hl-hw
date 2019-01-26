import React from 'react'

export default (props) => (
    <input 
        type="number"
        value={props.userInput}
        onChange={props.handleInputChange} 
    />
);