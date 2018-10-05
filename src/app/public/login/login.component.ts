import {
  Component,
  OnInit,
  HostBinding,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '../../core/services/auth.service';
import { routeFadeAnimation } from '../../animations';

import * as fromLayout from '../../core/store/reducers/layout.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [routeFadeAnimation]
})
export class LoginComponent implements OnInit {
  @HostBinding('@routeFadeAnimation')
  routeFadeAnimation = true;
  @HostBinding('class')
  classes = 'public-page';
  @ViewChild('formRef')
  formRef: any;

  lang$: Observable<string>;

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private router: Router,
    private store: Store<fromLayout.State>
  ) {
    this.lang$ = store.pipe(select(fromLayout.getCurrentLanguage));
  }

  ngOnInit() {
    this.lang$.subscribe(lang => this.translate.use(lang));
  }

  login() {
    const { username, password } = this.formRef;

    if (username && password) {
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      });
    }
  }
}
