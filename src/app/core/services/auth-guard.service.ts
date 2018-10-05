import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad,
  Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    console.log('canActivate ' + url);
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('canActivateChild ');
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    console.log('canLoad ' + url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.loggedIn.getValue()) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    // const sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { session_id: sessionId },
    //   fragment: 'anchor'
    // };
    // Navigate to the login page with extras
    this.router.navigate(['/login']);

    return false;
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
