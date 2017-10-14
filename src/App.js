import React, { Component } from 'react';
import home from './components/Home/home.js';

import router from './router';

export default class App extends Component {
  render() {
    return (
     <div>
       <div id="App__routerContainer">
         { router }
       </div>
     </div>
   )
  }
 }
