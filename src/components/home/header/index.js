import React, { Component } from "react";
import { Button } from "reactstrap";

function Navigation(props) {
  return (
    <nav className="header-navigation">
      <ul className="header-navigation__list">
        <li className="header-navigation__list-item">
          <a href="#" className="header-navigation__list-link">My books</a>
        </li>
        <li className="header-navigation__list-item">
          <a href="#" className="header-navigation__list-link">Profile</a>
        </li>
        <li className="header-navigation__list-item">
          <a href="#" className="header-navigation__list-link">All recipes</a>
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
