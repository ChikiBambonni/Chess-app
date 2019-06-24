import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { CommonTableComponent } from './common-table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    CommonTableComponent
  ],
  exports: [
    CommonTableComponent
  ]
})
export class CommonTableModule { }
