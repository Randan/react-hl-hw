import React, { Component } from 'react'

export class InputField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = ({target: {value}}) => {
        this.setState({value});
    }

    addItem = () => {
        const  {value, list} = this.state;
        
        value && !list && this.setState({
            list: [value]
        }); // TODO: make it GLOBAL
        value && list && this.setState({
            list: [...list, value]
        }); // TODO: make it GLOBAL
        this.setState({
            value: ''
        });
    }

    render() {
        const  {state, addItem, onChange} = this;
        return (
            <div>
                <input 
                    type="text"
                    value={state.value}
                    onChange={onChange}
                />
                <button
                    onClick={addItem}
                >Add</button>
            </div>
        );
    }
}