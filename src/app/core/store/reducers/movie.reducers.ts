import { MovieActions, EMovieActions } from './../actions/movie.actions';
import { initialMovieState, IMovieState } from './../state/movie.state';



export const movieReducers = (
  state = initialMovieState,
  action: MovieActions
): IMovieState => {
  switch (action.type) {
    case EMovieActions.GetMoviesSuccess: {
      return {
        ...state,
        movies: action.payload
      };
    }
    case EMovieActions.BookmarkMovieSuccess: {
      return {
        ...state,
        bookmarkMovies: action.payload
      };
    }
    case EMovieActions.GetBookmarkMoviesSuccess: {
      return {
        ...state,
        bookmarkMovies: action.payload
      };
    }
    case EMovieActions.GetMovieSuccess: {
      return {
        ...state,
        selectedMovie: action.payload
      };
    }
    default:
      return state;
  }
};
