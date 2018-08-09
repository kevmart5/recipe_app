import React from "react";

import Recipe from "../../../components/home/recipes/";

const KEY = "465ddbff109a7dbb37d2c241a60a4426";
const ID = "bf96a2c4";
const API = `https://api.edamam.com/search?q=tacos&app_id=${ID}&app_key=${KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

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
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Confirm identity
              </button>
            </form>
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
