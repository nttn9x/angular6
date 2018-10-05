import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';

import {
  ApiService,
  ArticleService,
  JwtService,
  AuthGuard,
  AuthService
} from './services';

@NgModule({
  exports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    JwtService,
    AuthGuard,
    AuthService,
    ApiService,
    ArticleService
  ],
  declarations: []
})
export class CoreModule {}
