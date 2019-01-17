import React from 'react'

class InputField extends React.Component {

    componentDidMount = () => console.log('Input-field.js', 'componentDidMount');
    componentDidUpdate = () => console.log('Input-field.js', 'componentDidUpdate');
    componentWillUnmount = () => console.log('Input-field.js', 'componentWillUnmount');

    pushProps = (e) => this.props.onChange(e.target.value);

    handleAddItem = (e) => {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        const {props, pushProps, handleAddItem} = this;

        console.log('Input-field.js', 'render');

        return (
            <form
                onSubmit={handleAddItem}
            >
                <input 
                    name="input"
                    type="text"
                    id="todo-input"
                    value={props.value}
                    onChange={pushProps}
                />
                <input
                    type="submit"
                    value="Add"
                />
            </form>
        );
    }

}

export default InputField;