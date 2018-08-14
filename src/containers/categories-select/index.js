import React from "react";
import PropTypes from "prop-types";

import api from "../../api";

class SelectCategorie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      recipes: [],
      isLoading: false,
      error: false, 
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleClick() {
    this.setState({isOpen: true});
    console.log(this.state.isOpen);
  }

  handleCloseClick() {
    this.setState({isOpen: false});
    console.log(this.state.isOpen);
  }

  render() {
    return (
      <div>
        <select className="form-control form-control-lg" onClick={this.handleLogoutClick}>
          <option>Fast food</option>
          <option>Healthy</option>
          <option>Desserts</option>
          <option>Meat</option>
        </select>
      </div>
    );
  }
}

export default SelectCategorie;

/**
 * Redux: tener un repositorio de datos los cuales pueden ser utilizados en cualquier container 
 * Todo el estado de la aplicación se va a almacenar en un store de datos (JS object)
 * Se va a definar un objeto de estados 
 * Reducers => funciones puras de JS 
 * Se van a tener varios reducers, pero al mismo tiempo se va a tener un main reducer
 * Redux solo dice que paso, no como cambiar el estado 
 * Second principle, state is readonly 
 */