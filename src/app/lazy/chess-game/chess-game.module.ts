import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from '@shared/components/navigation/navigation.module';
import { MovesTableModule } from '@shared/components/moves-table/moves.table.module';
import { ChessgroundModule } from '@shared/components/chessground/chessground.module';
import { ChessGameRoutingModule } from './chess-game-routing.module';
import { ChessGameComponent } from './chess-game.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    ChessgroundModule,
    MovesTableModule,
    ChessGameRoutingModule
  ],
  declarations: [
    ChessGameComponent
  ]
})
export class ChessGameModule { }
