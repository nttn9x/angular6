import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateComponent } from './private.component';

import { AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
        pathMatch: 'full',
        canLoad: [AuthGuard]
      },
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        canLoad: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
