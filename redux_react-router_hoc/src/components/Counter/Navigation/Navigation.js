import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.PureComponent {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        )
    }
}