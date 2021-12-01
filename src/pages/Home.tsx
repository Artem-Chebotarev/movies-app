import {FC} from 'react';
import {Header} from '../components/Header/Header';
import { MoviesList } from '../components/MoviesList/MoviesList';

export const Home: FC = () => {
  return (
    <>
      <Header />
      <MoviesList />
    </>
  );
};
