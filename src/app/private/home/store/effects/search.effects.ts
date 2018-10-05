import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  Search,
  SearchComplete,
  SearchError,
  SearchActionTypes
} from '../actions/search.action';

import { ArticleService } from '../../../../core/services';

@Injectable()
export class SearchEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(SearchActionTypes.SEARCH),
    mergeMap(action =>
      this.articleService.search(action.payload).pipe(
        // If successful, dispatch success action with result
        map(data => new SearchComplete(data)),
        // If request fails, dispatch failed action
        catchError(error => of(new SearchError(error)))
      )
    )
  );

  constructor(
    private articleService: ArticleService,
    private actions$: Actions
  ) {}
}
