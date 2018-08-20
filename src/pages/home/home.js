import React from "react";
import SelectCategories from "../../containers/selectCategories";
import RecipeList from "../../containers/recipeList";

export default class Home extends React.Component {

  componentDidMount () {
    this.props.getAllRecipes(this.props.url);
  }

  componentDidUpdate (prevProps) {
    if(this.props.url !== prevProps.url){
      this.props.getAllRecipes(this.props.url);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <SelectCategories />
            <RecipeList recipes={this.props.recipes}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
