import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import api from "../../api";
import RecipeOptions from "../recipeOptions/";
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
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
          <div className="categories__options">
            <ul className="list-group .categories__list">
              <li className="list-group-item categories__list-link">
                <Link to={'/'}>All categories</Link>
              </li>
              {
                api.categories.map((e, i) => (
                  <li 
                  className="list-group-item list-group-item-action"
                  key={i}>
                    <Link className="categories__list-route" to={`/category/${e.category}`}>{e.category}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectCategorie;
