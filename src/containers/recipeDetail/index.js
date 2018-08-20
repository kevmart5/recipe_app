import React from "react";

import { connect } from "react-redux";
import { func, string, array, bool } from "prop-types";

import LocalServer from "../../json-server";

import axios from 'axios';

class RecepiDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeDetail: "No recipe",
      getAllRecipes: func,
      favoriteRecipe: false
    };

    this.handleAddFavorite = this.handleAddFavorite.bind(this);
  }

  handleAddFavorite() {
    axios.post(LocalServer.categories[1].url, {
        label: this.state.recipeDetail.label,
        image: this.state.recipeDetail.image,
        ingredients: [
          this.state.recipeDetail.ingredients
        ]
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          favoriteRecipe: !this.state.favoriteRecipe
        })
      })
      .catch(error => {
        console.log(error);
      });

      
  }

  componentDidMount() {
    const recipe = this.props.recipes[this.props.recipeId].recipe;
    this.setState({ recipeDetail: recipe });
  }

  render() {
    const { recipeDetail } = this.state;
    if (
      this.props.isLoading ||
      recipeDetail.ingredients === undefined ||
      recipeDetail.totalNutrients === undefined
    ) {
      return (
        <div>
          <p>loading</p>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container recipe-detail__container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2 className="text-center">{recipeDetail.label}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <img
                  src={recipeDetail.image}
                  alt="Recipe image"
                  className="recipe__detail-image"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="recipe__calories">
                      <p>Calories {Math.round(recipeDetail.calories)} KJ</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="recipe__ingredients">
                      <ul>
                        {recipeDetail.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient.text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {
                    !this.state.favoriteRecipe ? (
                        <button
                        className="btn btn-primary"
                        onClick={this.handleAddFavorite}
                      >
                        Add to favorite
                      </button>
                    ) : (
                      <span className="favorite__message-success">Added as a favorite</span>
                    )
                  }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes,
  isLoading: state.recipes.isLoading,
  error: state.recipes.error
});

export default connect(
  mapStateToProps,
  null
)(RecepiDetail);
