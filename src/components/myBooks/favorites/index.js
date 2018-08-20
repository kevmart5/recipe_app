import React from "react";
import { Link } from "react-router-dom";

function Favorites(props) {
  console.log(props)
  return (
    <div className="card text-center">
      <div className="card-header">{props.recipe.label}</div>
      <div className="card-body">
        <img src={props.recipe.image} className="card__body-image" />
      </div>
      <div className="card-footer text-muted">
        <Link to={{pathname: `/favorites/${props.recipe.id}`, state:{recipe: props.recipe} }} className="btn btn-primary card__body-button">
          View recipe
        </Link>
      </div>
    </div>
  );
}

export default Favorites;
