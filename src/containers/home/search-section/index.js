import React from "react";

import Recipe from "../../../components/home/recipes/";

import "./searchSection.scss";

const KEY = "465ddbff109a7dbb37d2c241a60a4426";
const ID = "bf96a2c4";
let searchParam = 'steak'; 
let API = `https://api.edamam.com/search?q=${searchParam}&app_id=${ID}&app_key=${KEY}`;
const URI = 'https://api.edamam.com/';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      recipes: [],
      isLoading: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ keyValue: event.target.value });
  }

  async handleSubmit(event) {
    console.log("Key " + this.state.keyValue);
    searchParam = this.state.keyValue;
    event.preventDefault();
  }

  render() {
    const { recipes } = this.state;
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="container">
        <div className="search-form">
          <div className="row">
            <div className="col-md-4 align-self-center">
              <h5>Search new recipes</h5>
            </div>
            <div className="col-md-8 align-self-center">
              <div className="search-section">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="form-group mb-2">
                  <div className="form-group mx-sm-3 mb-2">
                    <label className="sr-only">
                      Data
                    </label>
                    <input type="text" className="form-control" placeholder="Search"
                      value={this.state.keyValue}
                      onChange={this.handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary mb-2">
                    Search
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {recipes.map(rec => (
            <Recipe label={rec.recipe.label} image={rec.recipe.image} />
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await fetch(API);
      const data = await result.json();
      this.setState({ recipes: data.hits });
      this.setState({ isLoading: false });
      console.log(this.state.recipes);
    } catch (err) {
      this.setState({
        error
      });
    }
  }
}

export default SearchBar;
