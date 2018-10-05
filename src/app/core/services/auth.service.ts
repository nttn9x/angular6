import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.loggedIn.next(true))
    );
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
