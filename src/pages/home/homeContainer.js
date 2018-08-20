import React from "react";
import { connect } from 'react-redux'
import getAllRecipes from '../../redux/actionsCreators/recipes';
import Home from './home';
import api from '../../api'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)

  const pathParams = ownProps.match.params.filter;

  const categoryUrl = validateCategoryParams(pathParams);

  return {
    url: categoryUrl,
    recipes: state.recipes.recipes,
    isLoading: state.recipes.isLoading,
    error: state.recipes.error
  }
}

function validateCategoryParams (path) {
  const category = api.categories.find(element => element.category == path);
  return category ? category.url : api.categories[7].url;
}

const mapDispatchToProps = {
  getAllRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);