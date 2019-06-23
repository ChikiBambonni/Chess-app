import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessgroundComponent } from '@shared/components/chessground/chessground.component';
import { MovesTableComponent } from '@shared/components/moves-table/moves-table.component';
import { ChatAreaComponent } from '@shared/components/chat-area/chat-area.component';
import { AvatarIconComponent } from '@shared/components/avatar-icon/avatar-icon.component';
import { MostSuccessfullGamesComponent } from '@shared/components/most-successfull-games/most-successfull-games.component';
import { AccountInfoComponent } from '@shared/components/account-info/account-info.component';
import { FideLeaderboardComponent } from '@shared/components/fide-leaderboard/fide-leaderboard.component';
import { PromotionChoiceComponent } from './components/promotion-choice/promotion-choice.component';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { LastGameComponent } from './components/last-game/last-game.component';
import { ForumComponent } from './components/forum/forum.component';
import { ChessgroundStaticComponent } from './components/chessground-static/chessground-static.component';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { CommonPaginatorComponent } from './components/common-paginator/common-paginator.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent,
    AvatarIconComponent,
    MostSuccessfullGamesComponent,
    AccountInfoComponent,
    FideLeaderboardComponent,
    PromotionChoiceComponent,
    DropdownListComponent,
    LastGameComponent,
    ForumComponent,
    ChessgroundStaticComponent,
    CommonTableComponent,
    CommonPaginatorComponent
  ],
  declarations: [
    ChessgroundComponent,
    MovesTableComponent,
    ChatAreaComponent,
    AvatarIconComponent,
    MostSuccessfullGamesComponent,
    AccountInfoComponent,
    FideLeaderboardComponent,
    PromotionChoiceComponent,
    DropdownListComponent,
    LastGameComponent,
    ForumComponent,
    ChessgroundStaticComponent,
    CommonTableComponent,
    CommonPaginatorComponent
  ],
  entryComponents: [
    PromotionChoiceComponent
  ]
})
export class SharedModule { }
