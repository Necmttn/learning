import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage'
import Drone from './containers/Drone'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <Drone />
      </div>
    );
  }
}

export default App;
