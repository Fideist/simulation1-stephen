import React from "react";
import { Switch, Route } from "react-router-dom";

import home from './components/Home/home.js';
import shelfABin from './components/Shelves/shelf.js';

export default (
  <Switch>
    <Route component={ home } path="/" exact />
    <Route component={ shelf } path="/shelf" />
  </Switch>
)
