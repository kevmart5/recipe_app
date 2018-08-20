import React from "react";

function Favorites(props) {
  console.log("props", props);
  return (
    <div className="card text-center">
      <div className="card-header">{props.label}</div>
      <div className="card-body">
        <img src={props.image} className="card__body-image" />
      </div>
    </div>
  );
}

export default Favorites;
