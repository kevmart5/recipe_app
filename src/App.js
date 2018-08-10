
import React, { Component } from 'react';
import "babel-polyfill";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/scss/main.scss';

import Home from './pages/home/';
import Profile from './pages/profile/';
import RecipeDetails from './pages/recipeDetails/'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/recipe-detail" component={RecipeDetails} />
        </div>
      </Router>
    )
  }
}

export default App;

