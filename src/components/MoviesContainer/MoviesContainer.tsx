import {FC, useState} from 'react';
import {BUTTON_TEXT, NO_MOVIES} from '../../constants/constants';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {IMovie} from '../../types/movies';

import {MovieItem} from '../MovieItem/MovieItem';

import styles from './MoviesContainer.module.css';

export const MoviesContainer: FC = () => {
  const [isFavouriteMovies, setIsFavouriteMovies] = useState<boolean>(false);

  const {movies, favouriteMovies} = useTypedSelector((state) => state.movies);

  const handleClickButton = () => {
    setIsFavouriteMovies(!isFavouriteMovies);
  };

  const renderButton = (movies: IMovie[]) => {
    return (
      movies.length > 0 && (
        <button className={styles.button} onClick={() => handleClickButton()}>
          {!isFavouriteMovies ? BUTTON_TEXT.SHOW_FAVOURITES_MOVIES : BUTTON_TEXT.SHOW_ALL_MOVIES}
        </button>
      )
    );
  };

  const renderAllMovies = (isFavouriteMovies: boolean, movies: IMovie[], NO_MOVIES: string) => {
    return (
      !isFavouriteMovies && (
        <div className={styles.moviesContainer}>
          {movies.length ? movies.map((elem) => <MovieItem key={elem.id} item={elem} />) : <h1>{NO_MOVIES}</h1>}
        </div>
      )
    );
  };

  const renderFavouriteMovies = (isFavouriteMovies: boolean, favouriteMovies: IMovie[], NO_MOVIES: string) => {
    return (
      isFavouriteMovies && (
        <div className={styles.moviesContainer}>
          {favouriteMovies.length ? (
            favouriteMovies.map((elem) => <MovieItem key={elem.id} item={elem} />)
          ) : (
            <h1>{NO_MOVIES}</h1>
          )}
        </div>
      )
    );
  };

  return (
    <>
      {renderButton(movies)}

      {renderAllMovies(isFavouriteMovies, movies, NO_MOVIES)}

      {renderFavouriteMovies(isFavouriteMovies, favouriteMovies, NO_MOVIES)}
    </>
  );
};
