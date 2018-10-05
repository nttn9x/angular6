import { Component, OnInit, HostBinding } from '@angular/core';

import { routeFadeAnimation } from '../../../animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [routeFadeAnimation]
})
export class ProductListComponent implements OnInit {
  @HostBinding('@routeFadeAnimation')
  routeFadeAnimation = true;
  @HostBinding('class')
  classes = 'private-page';

  constructor() {}

  ngOnInit() {}
}
