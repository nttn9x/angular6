import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LoginMaterialModule } from './login.material.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { LanguagesComponent } from './languages/languages.component';
import { FormComponent } from './form/form.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    LoginRoutingModule,
    LoginMaterialModule
  ],
  declarations: [LoginComponent, LanguagesComponent, FormComponent]
})
export class LoginModule {}
