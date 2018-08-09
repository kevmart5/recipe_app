import React, { Component } from "react";

import "../../assets/scss/main.scss";

import Header from "../../components/home/header/";

import SearchBar from "../../containers/home/search-section/";
import BannerHome from "../../components/home/banner/";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BannerHome />
        <SearchBar />
      </div>
    );
  }
}

export default Home;
