
import React, { Component } from 'react';
import "babel-polyfill";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/scss/main.scss';

import Home from './pages/home/';
import About from './pages/about/';
import RecipeDetails from './pages/recipeDetails/'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipe-detail" component={RecipeDetails} />
        </div>
      </Router>
    )
  }
}

export default App;

