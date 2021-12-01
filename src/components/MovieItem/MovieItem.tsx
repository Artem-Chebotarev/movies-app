import {FC} from 'react';
import {IMG_300} from '../../config/config';
import {ICON_BIN, ICON_LIKED, ICON_UNLIKED} from '../../constants/constants';
import {useActions} from '../../hooks/useActions';
import {IMovie} from '../../types/movies';
import {getMovieTitle} from '../../utils/getMovieTitle';

import styles from './MovieItem.module.css';

interface MovieItemProps {
  item: IMovie;
}

export const MovieItem: FC<MovieItemProps> = ({item}) => {
  const {changeFavouriteStatus, removeMovie} = useActions();

  const handleClickFavourite = (id: number) => {
    changeFavouriteStatus(id);
  };

  const handleClickBin = (id: number) => {
    removeMovie(id);
  };

  const renderIcons = () => {
    return (
      <div className={styles.iconsContainer}>
        <div className={styles.favourite}>
          <img
            className={styles.icon}
            onClick={() => handleClickFavourite(item.id)}
            src={item.isFavourite ? ICON_LIKED.icon : ICON_UNLIKED.icon}
            alt={ICON_LIKED.title}
          />
        </div>
        <div className={styles.favourite}>
          <img
            className={styles.icon}
            onClick={() => handleClickBin(item.id)}
            src={ICON_BIN.icon}
            alt={ICON_BIN.title}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.movie}>
      <img className={styles.poster} src={`${IMG_300}${item.poster_path}`} alt={getMovieTitle(item)} />
      <div className={styles.movieInfo}>
        <h4>{getMovieTitle(item)}</h4>
        {renderIcons()}
      </div>
    </div>
  );
};
