export interface IMovie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

export interface MoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: string | null;
}

export enum MoviesActionEnum {
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
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

export type MoviesAction = FetchMoviesAction | FetchSuccessAction | FetchErrorAction;
