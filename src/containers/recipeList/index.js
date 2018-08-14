import React from "react";

import Recipe from "../../components/home/recipes/";
import api from "../../api";
import SelectCategorie from '../categories-select/'
import "./recipe-list.scss";

class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyValue: "",
      recipes: [],
      isLoading: false,
      error: false, 
      category: api.categories[7].url
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
    const searchInput = api.categories.filter(n => n.category === value);
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
      const result = await fetch(this.state.category);
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

export default RecipeList;
