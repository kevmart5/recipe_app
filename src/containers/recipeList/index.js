import React from "react";
import { connect } from "react-redux";
import { func, string, array, bool } from "prop-types";
import Recipe from "../../components/home/recipes/";
import api from "../../api";

import getAllRecipes from "../../redux/actionsCreators/recipes";

import Spinner from "../../components/spinner/";

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      recipes: [],
      isLoading: false,
      error: false,
      getAllRecipes: func
    };
  }

  render() {
    const { recipes } = this.props;
    const isLoading = this.state.isLoading;
    console.log(recipes);

    if (isLoading) {
      
    } else {
      return (
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 recipe__main">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                <div className="text-center recipe-list__title">
                  {this.props.categoryParam ? (
                    <h3>Our results for {this.props.categoryParam}</h3>
                  ) : (
                    <h3>Welcome to Find it!</h3>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {recipes.map((rec, index) => (
                <Recipe
                  label={rec.recipe.label}
                  image={rec.recipe.image}
                  dietLabels={rec.recipe.dietLabels}
                  calories={rec.recipe.calories}
                  recipe={rec.recipe}
                  key={index}
                  recipeIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}
