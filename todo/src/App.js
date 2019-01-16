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
    }

    onChange = (value) => {
        this.setState({value});
    }

    onSubmit = () => {
        const {value, list} = this.state;
        const newListItem = {
            name: value,
            done: false,
            id: Date.now()
        };

        value && !list && this.setState({list: [newListItem]});
        value && list && this.setState({list: [...list, newListItem]});

        this.setState({value: ''});
        document.getElementById('todo-input').value = '';
    }

    removeItem = (id) => {
        const {list} = this.state;

        list.splice(list.findIndex(obj => obj.id === id), 1);
        this.setState({list});
    }

    render() {
        const {list} = this.state;
        const {onChange, onSubmit, removeItem} = this;

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
                            id={item.id}
                            data={item.name}
                            done={item.done}
                            removeItem={removeItem}
                        />
                    )}
                </ul>
            </div>
        );
    }

}

export default App;
