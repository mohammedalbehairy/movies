import { IMovieState } from './../state/movie.state';
import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';

const selectMovies = (state: IAppState) => state.movies;

export const selectMovieList = createSelector(
  selectMovies,
  (state: IMovieState) => state.movies
);

export const selectBookmarkMovieList = createSelector(
  selectMovies,
  (state: IMovieState) => state.bookmarkMovies
);

export const selectSelectedMovie = createSelector(
  selectMovies,
  (state: IMovieState) => state.selectedMovie
);
