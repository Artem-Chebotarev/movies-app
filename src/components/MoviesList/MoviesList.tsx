import {FC, useEffect} from 'react';
import {NO_MOVIES} from '../../constants/constants';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {Loader} from '../Loader/Loader';
import {MovieItem} from '../MovieItem/MovieItem';

import styles from './MoviesList.module.css';

export const MoviesList: FC = () => {
  const {movies, error, isLoading} = useTypedSelector((state) => state.movies);

  const {fetchMovies} = useActions();

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movies);

  return (
    <>
      {isLoading && (
        <h1 className={styles.loadingContainer}>
          <Loader />
        </h1>
      )}

      {error && <h1 className={styles.loadingContainer}>{error}</h1>}

      <div className={styles.container}>
        {movies.length ? movies.map((elem) => <MovieItem key={elem.id} item={elem} />) : <h1>{NO_MOVIES}</h1>}
      </div>
    </>
  );
};
