import * as a from "../../actions/types";
import api from '../../../api'

const INITIAL_STATE = {
  recipes: [],
  isLoading: false,
  error: "",
  apiUrl: api.categories[5].url
};

function recipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.RECIPES_GETALL_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case a.RECIPES_GETALL_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false
      };

    case a.RECIPES_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case a.RECIPES_CHANGE_URL:
      return {
        ...state,
        isLoading: false,
        apiUrl: action.payload
      }
      
    default:
      return state;
  }
}

export default recipesReducer;
