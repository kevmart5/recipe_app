
import React, { Component } from 'react';
import "babel-polyfill";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home/';
import Profile from './pages/profile/';
import RecipeDetails from './pages/recipeDetails/';
import Footer from './components/home/footer/';
import Header from './components/home/header/';
import Banner from './components/home/banner/';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/recipe-detail/:id" component={RecipeDetails} />
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

