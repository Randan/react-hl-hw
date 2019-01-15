import React from 'react';

export class ListItem extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
    
        }
    }

    render() {
        const {removeItem} = this;
        
        return (
            <li>
                <input type="checkbox" />
                {this.props.data}
                <button
                    onClick={removeItem}   
                >X</button>
            </li>
        )
    }

}
