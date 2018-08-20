
import React, { Component } from 'react';
import "babel-polyfill";
import { BrowserRouter as Router, Route, Link, BrowserHistory  } from "react-router-dom";

import Home from './pages/home/';
import RecipeDetails from './pages/recipeDetails/';
import Footer from './components/home/footer/';
import Banner from './components/home/banner/';
import Header from './components/home/header/';
import MyBooks from './pages/myBooks/';
import FavoriteDetail from './pages/favoriteDetail/';

class App extends Component {
  render() {
    return (
      <Router history={BrowserHistory}>
        <React.Fragment>
          <Header />
          <Banner />
          <Route exact path="/" component={Home} />
          <Route path="/category/:filter" component={Home} />
          <Route path="/recipe-detail/:id" component={RecipeDetails} />
          <Route path="/favorites/:id" component={FavoriteDetail} /> 
          <Route path="/myBooks" component={MyBooks} />
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

