import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { ChessgroundModule } from '@shared/components/chessground/chessground.module';
import { OpeningsCgComponent } from './openings-cg.component';

@NgModule({
  imports: [
    CommonModule,
    ChessgroundModule,
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
