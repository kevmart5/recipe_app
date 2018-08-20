import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import api from '../../api';
import RecipeList from '../recipeList/';
import Banner from '../../components/home/banner/'

const categories = [
  { id: 1, val: "placeholder", label: "Choose option", disabled: true },
  { id: 2, val: "tacos", label: "tacos" },
  { id: 3, val: "pizza", label: "pizza" },
  { id: 4, val: "bread", label: "bread" }
];
class CategorieContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      category: ""
    };
  }

  render() {
    console.log(this.props.location.state.link);
    return (
      <React.Fragment>
        <Banner />
      </React.Fragment>
    );
  }
}

export default CategorieContent;