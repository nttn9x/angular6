import { createSelector, createFeatureSelector } from '@ngrx/store';
import {
  SearchActionTypes,
  SearchActionsUnion
} from '../actions/search.action';
import { Article } from '../../../../core/modules/article.model';
import { ConfigArticleState } from './index';

export interface ResultState {
  pageIndex: number;
  pageSize: number;
  total: number;
  results: Array<Article>;
}

export interface SearchState {
  isSearching: boolean;
  result: ResultState;
}

const initialState = {
  isSearching: false,
  result: {
    pageIndex: 0,
    pageSize: 0,
    total: 0,
    results: []
  }
};

export function searchReducer(
  state: SearchState = initialState,
  action: SearchActionsUnion
): SearchState {
  switch (action.type) {
    case SearchActionTypes.SEARCH:
      return {
        ...state,
        isSearching: true
      };
    case SearchActionTypes.SEARCH_COMPLETE:
      return {
        ...state,
        result: action.payload,
        isSearching: false
      };
    case SearchActionTypes.SEARCH_ERROR:
      return {
        ...state,
        isSearching: false
      };
    default:
      return state;
  }
}

export const selectConfigArticle = createFeatureSelector<ConfigArticleState>(
  'configArticle'
);

export const selectResult = createSelector(
  selectConfigArticle,
  state => state.search.result
);

export const selectIsSearching = createSelector(
  selectConfigArticle,
  state => state.search.isSearching
);
