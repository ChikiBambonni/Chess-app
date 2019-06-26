import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { MovesTableComponent } from './moves-table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    MovesTableComponent
  ],
  exports: [
    MovesTableComponent
  ]
})
export class MovesTableModule { }
