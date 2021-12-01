import {IMovie} from '../types/movies';

export const getMovieTitle = (item: IMovie) => {
  return item.title ? item.title : item.name;
};
