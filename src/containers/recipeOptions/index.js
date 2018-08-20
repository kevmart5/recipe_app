import React from 'react';
import api from "../../api";

class RecipeOptions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      recipeCategory: this.props.category,
      categoryUrl: api.categories[7].url
    };

    console.log(this.props.category)
  }

  render () {
    return (
      <React.Fragment>
        <p>{this.state.recipeCategory}</p>
      </React.Fragment>
    )
  }
}

export default RecipeOptions;