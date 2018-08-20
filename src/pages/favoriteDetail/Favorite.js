import React, { Component } from "react";

export class FavoriteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeId: this.props.match.params.id,
      favorites: this.props.myBooks,
      recipe: {}
    };

    console.log(this.props)

  }

  render() {
    const { recipe } = this.props.location.state
    console.log(recipe)
      return (
        <React.Fragment>
          <div className="container recipe-detail__container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2 className="text-center">{recipe.label}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <img
                  src={recipe.image}
                  alt="Recipe image"
                  className="recipe__detail-image"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="recipe__calories">
                      <p>
                        Calories {Math.round(recipe.calories)} KJ
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="recipe__ingredients">
                      <ul>
                        {
                          recipe.ingredients[0].map((e, i) => (
                            <li key={i}>{e.text}</li>
                          ))
                        }
                      </ul>
   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
}
export default FavoriteDetail;
