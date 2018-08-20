import * as a from '../actions/types'

export default function getMyBooks (url) {
  return async dispatch => {
    dispatch({
      type: a.MYBOOKS_GETALL_REQUEST
    })

    try {
      const response = await fetch(url)
      const result = await response.json()
      dispatch({
        type:  a.MYBOOKS_GETALL_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: a.MYBOOKS_GETALL_FAILURE,
        error: err
      })
    }
  }
}