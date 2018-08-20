import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

import store from "./redux/store";
import App from "./App";

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  } 
} 

ReactDOM.render(<Index />, document.getElementById("root"));
