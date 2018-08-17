import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
      <div className="card text-center">
        <div className="card-header">{props.label}</div>
        <div className="card-body">
          <img src={props.image} className="card__body-image" />
          <p>
            {props.dietLabels.map((label, index) => (
              <span key={index}>#{label}</span>
            ))}
          </p>
        </div>
        <div className="card-footer text-muted">
          <Link
            to={{ pathname: `/recipe-detail/${props.recipeIndex}`, state: { recipe: props.recipeIndex} }}
            className="btn btn-primary card__body-button"
          >
            View recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
