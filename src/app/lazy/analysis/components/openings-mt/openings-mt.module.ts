import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { OpeningsMtComponent } from './openings-mt.component';

@NgModule({
  imports: [
    CommonModule,
    MovesTableModule
  ],
  declarations: [
    OpeningsMtComponent
  ],
  exports: [
    OpeningsMtComponent
  ]
})
export class OpeningsMtModule { }
