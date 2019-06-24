import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessgroundComponent } from './chessground.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChessgroundComponent
  ],
  exports: [
    ChessgroundComponent
  ]
})
export class ChessgroundModule { }
