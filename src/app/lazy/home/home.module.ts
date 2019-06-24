import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@material/material.module';
import { AccountInfoModule } from '@shared/components/account-info/account-info.module';
import { AvatarIconModule } from '@shared/components/avatar-icon/avatar-icon.module';
import { DropdownListModule } from '@shared/components/dropdown-list/dropdown-list.module';
import { ForumModule } from '@shared/components/forum/forum.module';
import { MostSuccessfullGamesModule } from './components/most-successfull-games/most-successfull-games.module';
import { FideLeaderboardModule } from './components/fide-leaderboard/fide-leaderboard.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MaterialModule,
    AccountInfoModule,
    AvatarIconModule,
    DropdownListModule,
    ForumModule,
    MostSuccessfullGamesModule,
    FideLeaderboardModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
