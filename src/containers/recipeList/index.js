import React from "react";
import { connect } from 'react-redux'
import { func, string, array, bool } from 'prop-types'
import Recipe from "../../components/home/recipes/";
import api from "../../api";

import getAllRecipes from '../../redux/actionsCreators/recipes'

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      recipes: [],
      isLoading: false,
      error: false,
      category: api.categories[7].url,
      getAllRecipes: func
    };
  }

  render() {
    const { recipes } = this.props;
    const isLoading = this.state.isLoading;
    console.log('props', this.props)
    return (
      <div className="col-xs-12 col-sm-12 col-md-10 recipe__main">
        <div className="container">
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