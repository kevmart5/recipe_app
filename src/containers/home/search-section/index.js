import React from "react";
import PropTypes from 'prop-types'; 

import Recipe from "../../../components/home/recipes/";
import api from "../../../api";

import "./searchSection.scss";

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
    this.getRecipes = this.getRecipes.bind(this);
  }

  handleChange(event) {
    this.setState({ keyValue: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.getRecipes(this.state.keyValue);

  }

  async getRecipes(value) {
    const searchInput = api.categories.filter( n => n.category === value);
    const url = searchInput.map(u => u.url);
    this.setState({ isLoading: true });
    try {
      const result = await fetch(url[0]);
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

  render() {
    const { recipes } = this.state;
    const isLoading = this.state.isLoading;
    return (
      <div className="container">
        <div className="search-form">
          <div className="row">
            <div className="col-md-12">
              <h5>Search new recipes</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="search-section">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="tacos"
                        id="tacos"
                        checked={this.state.keyValue === "tacos"}
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">Tacos</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="pizza"
                        id="pizza"
                        checked={this.state.keyValue === "pizza"}
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">Pizza</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="pasta"
                        id="pasta"
                        checked={this.state.keyValue === "pasta"}
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">Pasta</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {recipes.map((rec, index) => (
            <Recipe 
              label={rec.recipe.label}
              image={rec.recipe.image}
              dietLabels={rec.recipe.dietLabels}
              calories={rec.recipe.calories}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await fetch(api.categories[7].url);
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
