import {Dispatch} from 'react';
import MoviesService from '../../API/MoviesService';
import {ERROR} from '../../constants/constants';
import {MoviesActionEnum, MoviesAction} from '../../types/movies';
import {addFavouriteStatus} from '../../utils/addFavouriteStatus';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({type: MoviesActionEnum.FETCH_MOVIES});
      const response = await MoviesService.getAll();

      // setTimeout сделан для того, чтобы показать loader
      setTimeout(() => {
        // добавление поля isFavourite объектам прихедшим с api
        const moviesWithFavouriteStatus = response.results.map((elem) => addFavouriteStatus(elem));

        dispatch({
          type: MoviesActionEnum.FETCH_MOVIES_SUCCESS,
          payload: moviesWithFavouriteStatus,
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

export const changeFavouriteStatus = (id: number): MoviesAction => {
  return {
    type: MoviesActionEnum.CHANGE_FAVOURITE_STATUS,
    payload: id,
  };
};

export const removeMovie = (id: number): MoviesAction => {
  return {
    type: MoviesActionEnum.REMOVE_MOVIE,
    payload: id,
  };
};
