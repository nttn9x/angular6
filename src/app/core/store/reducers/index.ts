import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as fromLayout from './layout.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  layout: fromLayout.State;
}

export function logger(reducer: ActionReducer<any>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<object>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const reducers: ActionReducerMap<object> = {
  layout: fromLayout.reducer
};
