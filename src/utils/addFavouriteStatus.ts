import {IMovie} from '../types/movies';

export const addFavouriteStatus = (elem: IMovie) => {
  return {
    ...elem,
    isFavourite: false,
  };
};
