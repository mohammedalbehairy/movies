import { selectMovieList } from './../../store/selectors/movie.selector';
import { GetMovies } from './../../store/actions/movie.actions';
import { Store, select } from '@ngrx/store';
import { IAppState } from './../../store/state/app.state';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, of } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value = '';

  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;
  movies$ = this._store.pipe(select(selectMovieList));

  constructor(
    private _store: Store<IAppState>, private _router: Router
  ) {
  }

  ngOnInit() {

    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        const val = event.target.value.trim();
        return val;
      })
      // if character length greater then 2
      // , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
      this.searchGetCall(text);
    });
  }

  searchGetCall(term: string) {
    this._store.dispatch(new GetMovies(term));
  }

  reset() {
    this.value = '';
    this._store.dispatch(new GetMovies());
  }

  viewBookmarks() {
    this._router.navigate([`/movies/bookmarks`]);
  }
}