import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
