import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineGaugeModule } from '@shared/components/engine-gauge/engine-gauge.module';
import { MvTableNavigationModule } from '@shared/components/mv-table-navigation/mv-table-navigation.module';
import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { OpeningsMtComponent } from './openings-mt.component';

@NgModule({
  imports: [
    CommonModule,
    MovesTableModule,
    EngineGaugeModule,
    MvTableNavigationModule
  ],
  declarations: [
    OpeningsMtComponent
  ],
  exports: [
    OpeningsMtComponent
  ]
})
export class OpeningsMtModule { }
