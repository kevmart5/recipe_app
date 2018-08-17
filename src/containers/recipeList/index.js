import React from "react";
import { connect } from 'react-redux'
import { func, string, array, bool } from 'prop-types'
import Recipe from "../../components/home/recipes/";
import api from "../../api";
import "./recipe-list.scss";

import getAllRecipes from '../../redux/actionsCreators/recipes'

class RecipeList extends React.Component {
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
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount () {
    this.props.getAllRecipes()
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  isLoading: state.recipes.isLoading,
  error: state.recipes.error
})

const mapDispatchToProps = {
  getAllRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
