import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.checkServiceWorker();
  }

  checkServiceWorker() {
    if (environment.production) {
      const swUpdate = this.swUpdate;

      swUpdate.available.subscribe(event =>
        swUpdate.activateUpdate().then(() => document.location.reload())
      );
    }
  }
}
