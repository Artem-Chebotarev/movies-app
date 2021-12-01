import {FC, useEffect} from 'react';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';

import {Loader} from '../Loader/Loader';
import {MoviesContainer} from '../MoviesContainer/MoviesContainer';

import styles from './MoviesList.module.css';

export const MoviesList: FC = () => {
  const {error, isLoading} = useTypedSelector((state) => state.movies);

  const {fetchMovies} = useActions();

  const renderLoader = (isLoading: boolean) => {
    return (
      isLoading && (
        <div className={styles.loadingContainer}>
          <Loader />
        </div>
      )
    );
  };

  const renderError = (error: string | null) => {
    return error && <h1>{error}</h1>;
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {renderLoader(isLoading)}

      {renderError(error)}

      <MoviesContainer />
    </div>
  );
};
