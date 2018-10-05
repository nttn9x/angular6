import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input()
  isSearching: boolean;
  @Output()
  search = new EventEmitter<string>();

  query = '';

  constructor() {}

  ngOnInit() {}

  onChange(event: KeyboardEvent) {
    this.query = (<HTMLInputElement>event.target).value;
  }

  onSearch() {
    this.search.emit(this.query);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter') {
      return;
    }

    this.search.emit(this.query);
  }
}
