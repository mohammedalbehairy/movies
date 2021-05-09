import { GetMovie } from './../../../core/store/actions/movie.actions';
import { IAppState } from './../../../core/store/state/app.state';
import { selectSelectedMovie } from './../../../core/store/selectors/movie.selector';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // movieSlug: string;

  // constructor(
  //   private route: ActivatedRoute
  // ) { }

  // ngOnInit(): void {
  //   this.movieSlug = this.route.snapshot.params.slug;
  // }

  movie$ = this._store.pipe(select(selectSelectedMovie));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetMovie(this._route.snapshot.params.slug));
  }
}
