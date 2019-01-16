import React from 'react'

class InputField extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            // value = this.props.value;
        }
    }

    pushProps = (e) => {
        this.props.onChange(e.target.value);
    }

    handleAddItem = (e) => {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        const  {props, pushProps, handleAddItem} = this;

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