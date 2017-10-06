import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import router from '../router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="App-logo-container">
            <img src={logo} className="App-logo"/>
            <h1 className="App-title">SHELFIE</h1>
          </header>
        </div>
        <body className="App-body">
          <div className="App-shelf-container">
            <button className="App-shelf" id="shelf-a">
            Shelf A</button>
            <button
            className="App-shelf" id="shelf-b" onClick={} >
            Shelf B</button>
            <button className="App-shelf" id="shelf-c">
            Shelf C</button>
            <button className="App-shelf" id="shelf-d">
            Shelf D</button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
