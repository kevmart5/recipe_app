import * as a from '../actions/types'

export default function getAllRecipes (url) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.RECIPES_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(url)
      const result = await response.json()
      dispatch({
        type: a.RECIPES_GETALL_SUCCESS,
        payload: result.hits
      })
    } catch (err) {
      dispatch({
        type: a.RECIPES_GETALL_FAILURE,
        error: err
      })
    }
  }
}