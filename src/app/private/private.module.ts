import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateMaterialModule } from './shared/private.material.module';

import { PrivateComponent } from './private.component';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
  imports: [CommonModule, PrivateRoutingModule, PrivateMaterialModule],
  declarations: [HeaderComponent, PrivateComponent]
})
export class PrivateModule {}
