import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './recipes.scss';

function Recipe(props) {
  return (
    <div className="col-md-4">
      <div className="card recipe__card">
        <div className="card-body">
          <img src={props.image} />
          <h5 className="card-title">{props.label}</h5>
          <p>
            {props.dietLabels.map((label, index) => (
                <span key={index}>#{label}</span> 
              ))}
          </p>
          <p className="card-text">Calories: {props.calories}</p>
          <Link to={`/recipe-detail`} className="btn btn-primary">
            View recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
