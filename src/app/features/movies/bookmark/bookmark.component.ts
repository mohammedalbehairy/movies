import { IMovie } from './../../../core/interfaces/movie.interface';
import { selectBookmarkMovieList } from './../../../core/store/selectors/movie.selector';
import { BookmarkMovie, GetBookmarkMovies } from './../../../core/store/actions/movie.actions';
import { IAppState } from './../../../core/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  movies$ = this._store.pipe(select(selectBookmarkMovieList));

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetBookmarkMovies());
  }

  bookmark(movie: IMovie) {
    this._store.dispatch(new BookmarkMovie(movie));
  }

  viewDetails(slug: string) {
    this._router.navigate([`/movies/details/${slug}`]);
  }

  viewList() {
    this._router.navigate([`/movies/list`]);
  }
}
