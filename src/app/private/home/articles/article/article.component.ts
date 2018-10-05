import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

import { Article } from '../../../../core/modules/article.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  ngOnInit() {}
}
