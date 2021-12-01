import {IconType} from '../types/icons';
import {Bin, Liked, Unliked} from '../assets';

export const HEADER_TEXT = 'Popular movies';

export const ERROR = 'An error occurred while downloading movies';

export const NO_MOVIES = 'The list of movies is empty';

export enum BUTTON_TEXT {
  SHOW_FAVOURITES_MOVIES = 'Show favourites movies',
  SHOW_ALL_MOVIES = 'Show all movies'
}

export const ICON_BIN: IconType = {
  icon: Bin,
  title: 'Bin',
};
export const ICON_LIKED: IconType = {
  icon: Liked,
  title: 'Like',
};
export const ICON_UNLIKED: IconType = {
  icon: Unliked,
  title: 'Like',
};
