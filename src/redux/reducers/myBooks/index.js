import * as a from "../../actions/types";

const INITIAL_STATE = {
  favorites: [],
  isLoading: false,
  error: ""
};

function myBooksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.MYBOOKS_GETALL_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case a.MYBOOKS_GETALL_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
        isLoading: false
      };

    case a.MYBOOKS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
}

export default myBooksReducer;