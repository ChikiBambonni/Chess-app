import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessgroundStaticModule } from '@shared/components/chessground-static/chessground-static.module';
import { LastGameComponent } from './last-game.component';

@NgModule({
  imports: [
    CommonModule,
    ChessgroundStaticModule
  ],
  declarations: [
    LastGameComponent
  ],
  exports: [
    LastGameComponent
  ]
})
export class LastGameModule { }
