import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import api from "../../api";
import RecipeOptions from "../recipeOptions/";

const categories = [
  { id: 1, val: "placeholder", label: "Choose option", disabled: true },
  { id: 2, val: "tacos", label: "tacos" },
  { id: 3, val: "pizza", label: "pizza" },
  { id: 4, val: "bread", label: "bread" }
];
class SelectCategorie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      recipes: [],
      isLoading: false,
      error: false,
      category: "",
      categorySelected: ""
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(categorySelected) {
    this.setState({ categorySelected });
    console.log(`Option selected:`, categorySelected);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
          <div className="categories__options">
            <h5>Select categories</h5>
            <ul className="list-group categories__list">
              <li className="list-group-item categories__list-link">Categories</li>
              <li className="list-group-item">
                <Link to={`/category/tacos`} >Tacos</Link>
              </li>
              <li className="list-group-item">
                <Link to={`/category/pizza`}>Pizza</Link>
              </li>
              <li className="list-group-item">
                <Link to={`/category/hamburgers`}>Hamburgers</Link>
              </li>
              <li className="list-group-item">
                <Link to={`/category/french fries`}>French fries</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectCategorie;
