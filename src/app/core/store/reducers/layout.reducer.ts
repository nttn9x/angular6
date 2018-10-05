import {
  LayoutActionTypes,
  LayoutActionsUnion
} from '../actions/layout.actions';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { State as RootState } from './index';

export interface State {
  currentLanguage: string;
}

const initialState: State = {
  currentLanguage: 'en'
};

export function reducer(
  state: State = initialState,
  action: LayoutActionsUnion
): State {
  switch (action.type) {
    case LayoutActionTypes.ChangeLanguage:
      return {
        currentLanguage: action.payload
      };
    default:
      return state;
  }
}

export const selectLayoutState = createFeatureSelector<State>('layout');

export const getCurrentLanguage = createSelector(
  selectLayoutState,
  (state: State) => state.currentLanguage
);
