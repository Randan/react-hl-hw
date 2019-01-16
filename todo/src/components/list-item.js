import React from 'react';

class ListItem extends React.Component {

    removeItem = () => {}
    
    check = () => {}

    render() {
        const {removeItem, check} = this;
        
        return (
            <li>
                <input 
                    type="checkbox"
                    onChange={check}
                />
                {this.props.data}
                <button
                    onClick={removeItem}   
                >X</button>
            </li>
        )
    }

}

export default ListItem;