import React from "react";
import SelectCategorie from "../../containers/selectCategories/";
import RecipeList from "../../containers/recipeList/";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <SelectCategorie />
            <RecipeList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
