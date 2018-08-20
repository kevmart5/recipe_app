import React from "react";

function Spinner(props) {
  console.log(props);
  return (
    <React.Fragment>
      <div class="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </React.Fragment>
  );
}

export default Spinner;
