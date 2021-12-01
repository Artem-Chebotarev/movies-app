import {FC} from 'react';
import {IMG_300} from '../../config/config';
import {IMovie} from '../../types/movies';

import styles from './MovieItem.module.css';

interface MovieItemProps {
  item: IMovie;
}

export const MovieItem: FC<MovieItemProps> = ({item}) => {
  return (
    <div className={styles.movie}>
      <img src={`${IMG_300}${item.poster_path}`} alt={item.title ? item.title : item.name} />
      <div className={styles.movieInfo}>
        <h4>{item.title ? item.title : item.name}</h4>
        <span>Like</span>
      </div>
    </div>
  );
};
