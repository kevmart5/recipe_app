import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import recipesReducer from './recipes/'
import myBooksReducer from './myBooks/'

export default combineReducers({
  recipes: recipesReducer,
  favorites: myBooksReducer,
  router: routerReducer
})