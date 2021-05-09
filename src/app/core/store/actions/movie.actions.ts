import { IMovie } from './../../interfaces/movie.interface';
import { Action } from '@ngrx/store';


export enum EMovieActions {
  GetMovies = '[Movie] Get Movies',
  GetMoviesSuccess = '[Movie] Get Movies Success',

  GetBookmarkMovies = '[Movie] Get Bookmark Movies',
  GetBookmarkMoviesSuccess = '[Movie] Get Bookmark Movies Success',
  BookmarkMovie = '[Movie] Bookmark Movie',
  BookmarkMovieSuccess = '[Movie] Bookmark Movie Success',
  UnBookmarkMovie = '[Movie] UnBookmark Movie',
  UnBookmarkMovieSuccess = '[Movie] UnBookmark Movie Success',

  GetMovie = '[Movie] Get Movie',
  GetMovieSuccess = '[Movie] Get Movie Success'
}

export class GetMovies implements Action {
  public readonly type = EMovieActions.GetMovies;
  constructor(public payload?: string) { }
}

export class GetMoviesSuccess implements Action {
  public readonly type = EMovieActions.GetMoviesSuccess;
  constructor(public payload: IMovie[]) { }
}

//#region Bookmarks

export class GetBookmarkMovies implements Action {
  public readonly type = EMovieActions.GetBookmarkMovies;
}

export class GetBookmarkMoviesSuccess implements Action {
  public readonly type = EMovieActions.GetBookmarkMoviesSuccess;
  constructor(public payload: IMovie[]) { }
}

export class BookmarkMovie implements Action {
  public readonly type = EMovieActions.BookmarkMovie;
  constructor(public payload: IMovie) { }
}

export class BookmarkMovieSuccess implements Action {
  public readonly type = EMovieActions.BookmarkMovieSuccess;
  constructor(public payload: IMovie[]) { }
}

//#endregion Bookmarks

export class GetMovie implements Action {
  public readonly type = EMovieActions.GetMovie;
  constructor(public payload: string) { }
}

export class GetMovieSuccess implements Action {
  public readonly type = EMovieActions.GetMovieSuccess;
  constructor(public payload: IMovie) { }
}

export type MovieActions = GetMovies | GetMoviesSuccess | GetMovie | GetMovieSuccess | GetBookmarkMovies | GetBookmarkMoviesSuccess | BookmarkMovie | BookmarkMovieSuccess;
