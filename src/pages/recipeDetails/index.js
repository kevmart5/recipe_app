import React from "react";

import RecepiDetail from '../../containers/recipeDetail/'

import "../../assets/scss/main.scss";

export class RecipeDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RecepiDetail />
      </React.Fragment>
    );
  }
}

export default RecipeDetails;