import React from "react";

import './recipes.scss';

function Recipe(props) {
  return (
    <div className="col-md-4">
      <div className="card recipe__card">
        <div className="card-body">
          <img src={props.image} />
          <h5 className="card-title">{props.label}</h5>
          <p>
            {props.dietLabels.map(label => (
                <span>#{label}</span> 
              ))}
          </p>
          <p className="card-text">Calories: {props.calories}</p>
          <a href="#" className="btn btn-primary">
            View recipe
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
