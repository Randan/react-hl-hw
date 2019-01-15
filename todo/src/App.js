import React, { Component } from 'react';
import './App.css';
import { ListItem } from './components/list-item';
import { InputField } from './components/input-field';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: null
    }
  }

  render() {
    const {list} = this.state;

    return (
      <div className="App">
        <InputField />
        <ul>
          {this.state.list && this.state.list.map((item, i) =>
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
