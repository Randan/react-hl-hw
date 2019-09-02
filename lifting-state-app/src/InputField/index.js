import React from 'react';

const Input = (props) => (
    <input
        type="number"
        onChange={props.handleChange}
    />
)

export default Input;