import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AppDispatch} from '../redux/store';
import {fetchMovies, changeFavouriteStatus, removeMovie} from '../redux/actionCreators/moviesAC';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(
    {
      fetchMovies,
      changeFavouriteStatus,
      removeMovie,
    },
    dispatch
  );
};
