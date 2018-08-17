import * as a from '../actions/types'

import api from '../../api'

export default function getAllRecipes () {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.RECIPES_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(api.categories[7].url)
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.RECIPES_GETALL_SUCCESS,
        payload: result.hits
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.RECIPES_GETALL_FAILURE,
        error: err
      })
    }
  }
}