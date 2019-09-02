import React, { Component } from 'react';
import './App.css';
import ImportField from './InputField';

class App extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      ageValue: null
    }
  }

  handleChange(e) {
    this.setState({ageValue: +e.target.value});
  }

  render() {
    const {ageValue} = this.state;

    return (
      <div className="App">
        <div>
          <ImportField 
            handleChange={(e) => this.handleChange(e)}
          />
          <p>{(
            ageValue 
              ? (
                ageValue < 18
                  ? `You mast be older than 18`
                  : `You allowed to enter to the event`
              )
              : `Enter your age`
          )}</p>
        </div>
      </div>
    );
  }
}

export default App;
