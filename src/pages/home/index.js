import React, { Component } from "react";

import "../../assets/scss/main.scss";

import Header from "../../components/home/header/";
import SearchBar from "../../containers/home/search-section/";
import BannerHome from "../../components/home/banner/";
import Footer from '../../components/home/footer/';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BannerHome />
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

export default Home;
