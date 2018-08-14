import React from "react";
import PropTypes from "prop-types";

import api from "../../api";
import RecipeOptions from "../recipeOptions/";

import "./categories-select.scss";

class SelectCategorie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: '',
      recipes: [],
      isLoading: false,
      error: false,
      category: ''
    };

    this.handleSelectClick = this.handleSelectClick.bind(this);
  }



  handleSelectClick(event) {
    this.setState({
      category: event.target.value
    });
    console.log(event.target.value)
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="search-form">
            <div className="row">
              <div className="col-md-12">
                <h3>Search new recipes</h3>
                <p>
                  Select one categorie and see the options that we have for you
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="select__categories">
                <div className="form-inline">
                  <div className="form-group mx-sm-5 mb-2">
                    <select
                      className="form-control form-control-lg"
                      onChange={this.handleSelectClick}
                    >
                      <option value={'default'}>Select option...</option>
                      <option value={'fast food'}>Fast food</option>
                      <option value={'healthy'}>Healthy</option>
                      <option value={'Desserts'}>Desserts</option>
                      <option value={'Meat'}>Meat</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RecipeOptions category={this.state.category} />
      </React.Fragment>
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
 * 
 * Reducer: funcion pura, agarra el previous state y el type y calcula el next state y lo retorna
 * Al metodo dispatch, se le pasa el tipo
 * El dispatch son argumentos retorna el initial state
 * el método push, crea una mutación en la estructura de datos, por lo cual la función que lo utilice no
 * sería pura. El método concat, no muta los datos 
 * 
 * NOTA => object.assign crea una composición de objetos (object composition)
 * 
 * Actions simpre son objectos
 * Con react-router-redux es un reducers específico del router
 *  
 */
