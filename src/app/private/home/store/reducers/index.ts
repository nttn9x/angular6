import { ActionReducerMap } from '@ngrx/store';

import * as search from './search.reducer';

export interface ConfigArticleState {
  search: search.SearchState;
}

export const reducers: ActionReducerMap<ConfigArticleState> = {
  search: search.searchReducer
};
