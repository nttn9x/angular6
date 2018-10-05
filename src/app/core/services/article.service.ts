import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResultState } from '../../private/home/store/reducers/search.reducer';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private apiService: ApiService) {}

  search(query: Object): Observable<ResultState> {
    return this.apiService.post(`elsearch/search`, {
      searchIndex: 'articles',
      keyword: '*',
      from: 0,
      size: 100,
      searchAfter: 0
    });
  }
}
