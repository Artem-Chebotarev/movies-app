import {MoviesActionEnum, MoviesAction, MoviesState} from '../../../types/movies';

const initStateUsers: MoviesState = {
  movies: [],
  favouriteMovies: [],
  isLoading: false,
  error: '',
};

export const moviesReducer = (state = initStateUsers, action: MoviesAction): MoviesState => {
  const movies = state.movies;

  const favouriteMovies = state.favouriteMovies;

  switch (action.type) {
    case MoviesActionEnum.FETCH_MOVIES:
      return {
        ...state,
        isLoading: true,
        error: null,
        movies: [],
        favouriteMovies: [],
      };

    case MoviesActionEnum.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: action.payload,
        favouriteMovies: [],
      };

    case MoviesActionEnum.FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        movies: [],
        favouriteMovies: [],
      };

    case MoviesActionEnum.CHANGE_FAVOURITE_STATUS:
      const id = action.payload;

      const newMovies = movies.map((elem) => {
        if (elem.id === id) {
          elem = {...elem, isFavourite: !elem.isFavourite};
        }

        return elem;
      });

      const newFavouriteMovies = newMovies.filter((elem) => elem.isFavourite);

      return {
        ...state,
        movies: newMovies,
        favouriteMovies: newFavouriteMovies,
      };

    case MoviesActionEnum.REMOVE_MOVIE:
      const currentId = action.payload;

      const filteredMovies = movies.filter((elem) => elem.id !== currentId);

      const filteredFavouriteMovies = favouriteMovies.filter((elem) => elem.id !== currentId);

      return {
        ...state,
        movies: filteredMovies,
        favouriteMovies: filteredFavouriteMovies,
      };

    default:
      return state;
  }
};
