import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import './LoginLink/LoginLink';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <LoginLink />
      </div>
    );
  }
}

export default App;
