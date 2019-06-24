import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovesTableComponent } from './moves-table.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MovesTableComponent
  ],
  exports: [
    MovesTableComponent
  ]
})
export class MovesTableModule { }
