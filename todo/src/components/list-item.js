import React from 'react';

class ListItem extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            itemElementClass: this.props.done
        }
    }

    componentDidMount = () => console.log('List-item.js', 'componentDidMount');
    componentDidUpdate = () => console.log('List-item.js', 'componentDidUpdate');
    componentWillUnmount = () => console.log('List-item.js', 'componentWillUnmount');


    removeItem = () => {
        this.setState({itemElementClass: false});
        this.props.removeItem(this.props.id);
    }

    onCheck = () => {
        const {itemElementClass} = this.state;

        itemElementClass
            ? this.setState({itemElementClass: false})
            : this.setState({itemElementClass: true});
    }

    render() {
        const {removeItem, onCheck} = this;
        const {itemElementClass} = this.state;

        console.log('List-item.js', 'render');
        
        return (
            <li>
                <input 
                    type="checkbox"
                    onChange={onCheck}
                    checked={
                        itemElementClass ? 'checked' : ''
                    }
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