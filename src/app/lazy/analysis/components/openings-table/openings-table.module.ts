import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningsTableComponent } from './openings-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OpeningsTableComponent
  ],
  exports: [
    OpeningsTableComponent
  ]
})
export class OpeningsTableModule { }
