import { Component, OnInit, Input } from '@angular/core';

import { ArticleComponent } from './article/article.component';

import * as fromRoot from '../store/reducers/search.reducer';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  result: fromRoot.ResultState;

  viewPortItems: ArticleComponent[];

  constructor() {}

  ngOnInit() {}
}
