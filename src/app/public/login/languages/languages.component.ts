import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromLayout from '../../../core/store/reducers/layout.reducer';
import * as LayoutActions from '../../../core/store/actions/layout.actions';

@Component({
  selector: 'app-public-languages',
  templateUrl: './languages.component.html'
})
export class LanguagesComponent implements OnInit {
  @Input()
  language: string;

  constructor(private store: Store<fromLayout.State>) {}

  ngOnInit() {}

  onChangeLanguage(value: string) {
    this.store.dispatch(new LayoutActions.ChangeLanguage(value));
  }
}
