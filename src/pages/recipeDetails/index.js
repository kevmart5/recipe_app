import React from "react";

import RecepiDetail from '../../containers/recipeDetail/'

export class RecipeDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RecepiDetail  recipeId={this.props.location.state.recipe}/>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;