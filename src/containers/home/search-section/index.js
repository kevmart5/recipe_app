import React from "react";

import Recipe from "../../../components/home/recipes/";

import "./searchSection.scss";

const KEY = "465ddbff109a7dbb37d2c241a60a4426";
const ID = "bf96a2c4";
const API = `https://api.edamam.com/search?q=hamburger&app_id=${ID}&app_key=${KEY}`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="container">
        <div className="search-form">
          <div className="row">
            <div className="col-md-4 align-self-center">
              <h5>Search new recipes</h5>
            </div>
            <div className="col-md-8 align-self-center">
              <div className="">
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" />
          <div className="container">
            <div className="row">
              {recipes.map(rec => (
                <Recipe label={rec.recipe.label} image={rec.recipe.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    console.log("Calling");

    try {
      const result = await fetch(API);
      const data = await result.json();
      this.setState({ recipes: data.hits });
      console.log(this.state.recipes);
    } catch (err) {
      console.log(err);
    }
  }
}

export default SearchBar;
