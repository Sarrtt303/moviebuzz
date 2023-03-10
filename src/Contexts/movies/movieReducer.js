import { 
    SEARCH_MOVIES,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW} from '../types';

const MoviesReducer = (state, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_MOVIES:
        return {
          ...state,
          shows: action.payload,
          loading: false,
        };
        default: 
         return state;
    }
};

export default MoviesReducer;