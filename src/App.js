import React, { Component } from 'react';
import logo from './logo.svg';
import * as axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.test = this.test.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  test() {
    if(this.state.value != null && this.state.value != '')
    axios.post('http://localhost:3001/test', {
      data: this.state.value
    })
    .then(function (response) {
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          <button onClick={this.test}>
            TEST API
          </button>
      </div>
    );
  }
}

export default App;
