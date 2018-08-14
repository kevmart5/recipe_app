import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import recipesReducer from './recipes/'

export default combineReducers({
  recipes: recipesReducer,
  router: routerReducer
})