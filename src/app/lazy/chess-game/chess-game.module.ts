import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessGameRoutingModule } from './chess-game-routing.module';
import { ChessGameComponent } from './chess-game.component';

@NgModule({
  imports: [
    CommonModule,
    ChessGameRoutingModule
  ],
  declarations: [ChessGameComponent]
})
export class ChessGameModule { }
