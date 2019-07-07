import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonIconComponent } from './common-icon.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CommonIconComponent
  ],
  exports: [
    CommonIconComponent
  ]
})
export class CommonIconModule { }
