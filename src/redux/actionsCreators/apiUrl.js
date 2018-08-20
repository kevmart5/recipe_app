import * as a from '../actions/types'

export default function updateApiUrl (url) {
  return async dispatch => {
    dispatch({
      type: a.RECIPES_CHANGE_URL,
      payload: {url}
    })
  }
}