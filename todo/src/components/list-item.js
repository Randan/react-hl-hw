import React from 'react';

class ListItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            itemElementClass: this.props.done
        }
    }

    removeItem = () => this.props.removeItem(this.props.id);

    onCheck = () => {
        const {itemElementClass} = this.state;

        itemElementClass
            ? this.setState({itemElementClass: false})
            : this.setState({itemElementClass: true});
    }

    render() {
        const {removeItem, onCheck} = this;
        const {itemElementClass} = this.state;
        
        return (
            <li>
                <input 
                    type="checkbox"
                    onChange={onCheck}
                />
                <span
                    className={
                        itemElementClass ? 'striked' : ''
                    }
                >
                    {this.props.data}
                </span>
                <button
                    onClick={removeItem}   
                >X</button>
            </li>
        )
    }

}

export default ListItem;