import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AppDispatch} from '../redux/store';
import {fetchMovies} from '../redux/actionCreators/moviesAC';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(
    {
      fetchMovies,
    },
    dispatch
  );
};
