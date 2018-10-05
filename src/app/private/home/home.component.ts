import { Component, OnInit, HostBinding } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from './store/reducers/search.reducer';
import * as SearchActions from './store/actions/search.action';

import { routeFadeAnimation } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [routeFadeAnimation]
})
export class HomeComponent implements OnInit {
  @HostBinding('@routeFadeAnimation')
  routeFadeAnimation = true;
  @HostBinding('class')
  classes = 'private-page';

  result$: Observable<fromRoot.ResultState>;
  isSearching$: Observable<boolean>;

  constructor(private store: Store<fromRoot.SearchState>) {
    this.result$ = store.pipe(select(fromRoot.selectResult));
    this.isSearching$ = store.pipe(select(fromRoot.selectIsSearching));
  }

  ngOnInit() {}

  searchArticle(query: string) {
    this.store.dispatch(new SearchActions.Search(query));
  }
}
