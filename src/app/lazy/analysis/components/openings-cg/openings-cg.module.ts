import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { ChessgroundStaticModule } from '@shared/components/chessground-static/chessground-static.module';
import { OpeningsCgComponent } from './openings-cg.component';

@NgModule({
  imports: [
    CommonModule,
    ChessgroundStaticModule,
    MovesTableModule
  ],
  declarations: [
    OpeningsCgComponent
  ],
  exports: [
    OpeningsCgComponent
  ]
})
export class OpeningsCgModule { }
