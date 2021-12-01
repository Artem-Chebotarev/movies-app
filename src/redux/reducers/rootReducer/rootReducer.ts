import {combineReducers} from 'redux';
import {moviesReducer} from '../moviesReducer/moviesReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
});
