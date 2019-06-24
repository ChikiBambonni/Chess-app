import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessgroundStaticComponent } from './chessground-static.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ChessgroundStaticComponent
  ],
  exports: [
    ChessgroundStaticComponent
  ]
})
export class ChessgroundStaticModule { }
