import React from 'react'
import './App.css';
import ListItem from './components/List-item';
import InputField from './components/Input-field';

class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            list: null,
            value: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (value) => {
        this.setState({value});
    }

    onSubmit = () => {
        const  {value, list} = this.state;

        value && !list && this.setState({
            list: [value]
        });
        value && list && this.setState({
            list: [...list, value]
        });
        this.setState({
            value: ''
        });
    }

    render() {
        const {list} = this.state;
        const {onChange, onSubmit} = this;

        return (
            <div className="App">
                <InputField 
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
                <ul>
                    {list && list.map((item, i) =>
                        <ListItem
                            key={i}
                            data={item}
                        />
                    )}
                </ul>
            </div>
        );
    }

}

export default App;
