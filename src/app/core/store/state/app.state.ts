import { IMovieState, initialMovieState } from './movie.state';
import { RouterReducerState } from '@ngrx/router-store';



export interface IAppState {
  router?: RouterReducerState;
  movies: IMovieState;
}

export const initialAppState: IAppState = {
  movies: initialMovieState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
