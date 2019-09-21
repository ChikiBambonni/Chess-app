import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonTableModule } from '@shared/components/common-table/common-table.module';
import { MovesTableComponent } from './moves-table.component';

@NgModule({
  imports: [
    CommonModule,
    CommonTableModule
  ],
  declarations: [
    MovesTableComponent
  ],
  exports: [
    MovesTableComponent
  ]
})
export class MovesTableModule { }
