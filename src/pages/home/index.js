import React from 'react';

import RecipeList from '../../containers/recipeList/';


export default class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <RecipeList />
      </React.Fragment>
    ) 
  }
}


