import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { ChessgroundStaticModule } from '@shared/components/chessground-static/chessground-static.module';
import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ChessgroundStaticModule,
    MovesTableModule,
    AnalysisRoutingModule
  ],
  declarations: [
    AnalysisComponent
  ]
})
export class AnalysisModule { }
