import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ChangeLanguage = '[Layout] Change Language'
}

export class ChangeLanguage implements Action {
  readonly type = LayoutActionTypes.ChangeLanguage;

  constructor(public payload: string) {}
}

export type LayoutActionsUnion = ChangeLanguage;
