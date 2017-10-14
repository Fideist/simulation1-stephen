import React, { Component } from 'react';
import logo from '../../logo.png';
import './home.css'

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="App-logo-container">
            <img src={logo} className="App-logo"/>
            <h1 className="App-title">SHELFIE</h1>
          </header>
        </div>
      <body className = "App-body">
        <div className = "App-shelf-container">
          <Link className="shelfLink" to={`shelf/${shelf.id}`}>
            <span className = "App-shelf" id ={shelf.id}>
              Shelf {shelf.id}
            </span>
          </Link>
       </div>
      </body>
      </div>
    );
  }
}

export default Home;
