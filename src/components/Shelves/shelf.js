import React, { Component } from 'react';
import logo from '../../logo.png';
import './shelf.css'

import { Link } from 'react-router-dom';

class shelf extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <header className="App-logo-container">
              <Link className="homeLink" to="/">
                <img src={logo} className="App-logo"/>
              </Link>
              <h1 className="App-title">Shelf A</h1>
            </header>
          </div>
        <body className = "App-body">
          <div className = "App-shelf-container">
            <span className = "App-bin" id = "Bin-1">
            Bin 1
            </span>
            <span className = "App-bin" id = "Bin-2">
            Bin 2
            </span>
            <span className = "App-bin" id = "Bin-3">
            Bin 3
            </span>
            <span className = "App-bin" id = "Bin-4">
            Bin 4
            </span>
         </div>
        </body>
      </div>
    );
  }
}

export default shelf;
