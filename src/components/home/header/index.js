import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuDropDown from '../header/dropdownMenu'

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
      <p>Find it!</p>
    </div>
  )
}

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="principal__navigation">
                <Navigation />
              </div>
              <div className="dropdown__navigation">
                <MenuDropDown />
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="logo__element">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
