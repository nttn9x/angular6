import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  getToken(): string {
    return window.localStorage.getItem('peakvise_jwtToken');
  }

  saveToken(token: string) {
    window.localStorage.setItem('peakvise_jwtToken', token);
  }

  destroyToken() {
    window.localStorage.removeItem('peakvise_jwtToken');
  }
}
