import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './private/private.module#PrivateModule'
    // data: { preload: true }
  },
  {
    path: 'login',
    loadChildren: './public/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {}
