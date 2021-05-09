import { IMovie } from './../../../core/interfaces/movie.interface';
import { BookmarkMovie, GetMovies } from './../../../core/store/actions/movie.actions';
import { IAppState } from './../../../core/store/state/app.state';
import { selectMovieList, selectBookmarkMovieList } from './../../../core/store/selectors/movie.selector';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies$ = this._store.pipe(select(selectMovieList));
  bookmarkedMovies;

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetMovies());
  }

  bookmark(movie: IMovie) {
    this._store.dispatch(new BookmarkMovie(movie));
  }

  viewDetails(slug: string) {
    this._router.navigate([`/movies/details/${slug}`]);
  }
}