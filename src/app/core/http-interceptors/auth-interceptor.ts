import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.jwtService.getToken() + '';

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
