import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  SEARCH = '[Article Config Search] Search',
  SEARCH_COMPLETE = '[Article Config Book] Search Complete',
  SEARCH_ERROR = '[Article Config Book] Search Error',
  SET_DATAS = '[Article Config Search] Set Datas'
}

import { ResultState } from '../reducers/search.reducer';

export class Search implements Action {
  readonly type = SearchActionTypes.SEARCH;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = SearchActionTypes.SEARCH_COMPLETE;

  constructor(public payload: ResultState) {}
}

export class SearchError implements Action {
  readonly type = SearchActionTypes.SEARCH_ERROR;

  constructor(public payload: string) {}
}

export class SetDatas implements Action {
  readonly type = SearchActionTypes.SET_DATAS;

  constructor(public payload: Array<Search>) {}
}

export type SearchActionsUnion = Search | SearchComplete | SearchError;
