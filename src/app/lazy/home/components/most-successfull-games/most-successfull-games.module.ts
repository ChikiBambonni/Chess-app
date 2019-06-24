import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessgroundStaticModule } from '@shared/components/chessground-static/chessground-static.module';
import { MostSuccessfullGamesComponent } from './most-successfull-games.component';

@NgModule({
  imports: [
    CommonModule,
    ChessgroundStaticModule
  ],
  declarations: [
    MostSuccessfullGamesComponent
  ],
  exports: [
    MostSuccessfullGamesComponent
  ]
})
export class MostSuccessfullGamesModule { }
