export interface IMovie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  isFavourite?: boolean;
}

export interface MoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: string | null;
  favouriteMovies: IMovie[];
}

export enum MoviesActionEnum {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
  CHANGE_FAVOURITE_STATUS = 'CHANGE_FAVOURITE_STATUS',
  REMOVE_MOVIE = 'REMOVE_MOVIE',
}

export interface FetchMoviesAction {
  type: MoviesActionEnum.FETCH_MOVIES;
}

export interface FetchSuccessAction {
  type: MoviesActionEnum.FETCH_MOVIES_SUCCESS;
  payload: IMovie[];
}

export interface FetchErrorAction {
  type: MoviesActionEnum.FETCH_MOVIES_ERROR;
  payload: string;
}

export interface ChangeFavouriteStatusAction {
  type: MoviesActionEnum.CHANGE_FAVOURITE_STATUS;
  payload: number;
}

export interface RemoveMovieAction {
  type: MoviesActionEnum.REMOVE_MOVIE;
  payload: number;
}

export type MoviesAction =
  | FetchMoviesAction
  | FetchSuccessAction
  | FetchErrorAction
  | ChangeFavouriteStatusAction
  | RemoveMovieAction;
