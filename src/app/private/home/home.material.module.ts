import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [MatIconModule, MatButtonModule, MatProgressSpinnerModule]
})
export class HomeMaterialModule {}
