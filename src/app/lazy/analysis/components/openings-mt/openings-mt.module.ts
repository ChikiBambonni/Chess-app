import { EngineGaugeModule } from './../../../../shared/components/engine-gauge/engine-gauge.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { OpeningsMtComponent } from './openings-mt.component';

@NgModule({
  imports: [
    CommonModule,
    MovesTableModule,
    EngineGaugeModule
  ],
  declarations: [
    OpeningsMtComponent
  ],
  exports: [
    OpeningsMtComponent
  ]
})
export class OpeningsMtModule { }
