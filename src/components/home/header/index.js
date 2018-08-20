import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigation(props) {
  return (
    <nav className="header-navigation">
      <ul className="header-navigation__list">
        <li className="header-navigation__list-item">
          <Link to={`/`} className="header-navigation__list-link">All recipes</Link>
        </li>
        <li className="header-navigation__list-item">
          <Link to={'/myBooks'} className="header-navigation__list-link">My books</Link>
        </li>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <div className="header__branding">
      <a href="#" className="header__branding-logo">Logo</a>
    </div>
  )
}

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div>
                <Navigation />
              </div>
            </div>
            <div className="col-md-2">
              <Logo />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
