import React, { Component } from "react";

import "../../assets/scss/main.scss";

import Header from "../../components/home/header/";
import Footer from '../../components/home/footer/';

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Profile;