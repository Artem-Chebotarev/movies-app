import {MoviesActionEnum, MoviesAction, MoviesState} from '../../../types/movies';

const initStateUsers: MoviesState = {
  movies: [],
  isLoading: false,
  error: '',
};

export const moviesReducer = (state = initStateUsers, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case MoviesActionEnum.FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
        error: null,
        movies: [],
      };

    case MoviesActionEnum.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: action.payload,
      };

    case MoviesActionEnum.FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        movies: [],
      };

    default:
      return state;
  }
};
