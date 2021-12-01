import {Dispatch} from 'react';
import MoviesService from '../../API/MoviesService';
import { ERROR } from '../../constants/constants';
import {MoviesActionEnum, MoviesAction} from '../../types/movies';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({type: MoviesActionEnum.FETCH_MOVIES});
      const response = await MoviesService.getAll();

      // setTimeout сделан для того, чтобы показать loader
      setTimeout(() => {
        dispatch({
          type: MoviesActionEnum.FETCH_MOVIES_SUCCESS,
          payload: response.results,
        });
      }, 1500);
    } catch (error) {
      dispatch({
        type: MoviesActionEnum.FETCH_MOVIES_ERROR,
        payload: ERROR,
      });
    }
  };
};
