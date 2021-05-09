import { IMovie } from './../../interfaces/movie.interface';

export interface IMovieState {
  movies: IMovie[];
  bookmarkMovies: IMovie[];
  selectedMovie: IMovie;
}

export const initialMovieState: IMovieState = {
  movies: null,
  bookmarkMovies: null,
  selectedMovie: null
};
