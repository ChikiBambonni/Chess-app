import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessgroundModule } from '@shared/components/chessground/chessground.module';
import { LastGameComponent } from './last-game.component';

@NgModule({
  imports: [
    CommonModule,
    ChessgroundModule
  ],
  declarations: [
    LastGameComponent
  ],
  exports: [
    LastGameComponent
  ]
})
export class LastGameModule { }
