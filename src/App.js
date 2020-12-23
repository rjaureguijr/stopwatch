import React from 'react';
import logo from './logo.svg';
import Stopwatch from './Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Stopwatch/>
    </div>
  );
}

export default App;
