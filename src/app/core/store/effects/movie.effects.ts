import { IMovie } from './../../interfaces/movie.interface';
import { selectMovieList, selectBookmarkMovieList } from './../selectors/movie.selector';
import { GetMovie, EMovieActions, GetMovies, GetMoviesSuccess, GetMovieSuccess, GetBookmarkMovies, GetBookmarkMoviesSuccess, BookmarkMovie, BookmarkMovieSuccess } from './../actions/movie.actions';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { MoviesService } from '../../services/movies/movies.service';

@Injectable()
export class MovieEffects {
  @Effect()
  getMovie$ = this._actions$.pipe(
    ofType<GetMovie>(EMovieActions.GetMovie),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectMovieList))),
    switchMap(([slug, movies]) => {
      const selectedMovie = movies ? movies.filter(movie => movie.slug == slug)[0] : null;
      return of(new GetMovieSuccess(selectedMovie));
    })
  );

  @Effect()
  bookmarkMovie$ = this._actions$.pipe(
    ofType<BookmarkMovie>(EMovieActions.BookmarkMovie),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectBookmarkMovieList))),
    switchMap(([movie, movies]) => {
      const newMovies = movies ? [...movies, movie] : [movie]
      return of(new BookmarkMovieSuccess(newMovies));
    })
  );

  @Effect()
  getBookmarkMovies$ = this._actions$.pipe(
    ofType<GetBookmarkMovies>(EMovieActions.GetBookmarkMovies),
    // map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectBookmarkMovieList))),
    switchMap((movies) => {
      return of(new GetBookmarkMoviesSuccess(movies[1]));
    })
  );

  @Effect()
  getMovies$ = this._actions$.pipe(
    ofType<GetMovies>(EMovieActions.GetMovies),
    switchMap((action) => action.payload ? this._movieService.getMovies(action.payload) : this._movieService.getMovies()),
    switchMap((movieHttp: { movies: IMovie[] }) => of(new GetMoviesSuccess(movieHttp.movies)))
  );

  constructor(
    private _movieService: MoviesService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) { }
}
