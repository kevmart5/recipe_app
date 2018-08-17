import React from "react";

import { connect } from "react-redux";
import { func, string, array, bool } from "prop-types";

import getAllRecipes from "../../redux/reducers/recipes/";

import "./recipe-detail.scss";

class RecepiDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeDetail: "No recipe",
      getAllRecipes: func
    };
  }

  componentDidMount() {
    const recipe = this.props.recipes[this.props.recipeId].recipe;
    this.setState({ recipeDetail: recipe });
    console.log(recipe);
  }

  render() {
    const { recipeDetail } = this.state;
    return (
      <React.Fragment>
        <div className="container recipe-detail__container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="text-center">{recipeDetail.label}</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="recipe__detail-image">
                <img src={recipeDetail.image} alt="Recipe image" />
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="recipe__diet-labels">
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  isLoading: state.recipes.isLoading,
  error: state.recipes.error
});

export default connect(mapStateToProps, null)(RecepiDetail);
