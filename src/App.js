import React, { Component } from 'react';
import logo from './logo.svg';
import ri78 from './ri78.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dicoding CI/CD - React App</h1>
        </header>
        <p className="App-intro">
          Dirgahayu Republik Indonesia 🇮🇩 🎉🎉🎉
        </p>
        <img src={ri78} className="App-ri78" alt="ri78" />
      </div>
    );
  }
}

export default App;
