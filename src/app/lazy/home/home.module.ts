import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { NavigationModule } from '@shared/components/navigation/navigation.module';
import { FindGameModule } from '@shared/components/find-game/find-game.module';
import { DropdownListModule } from '@shared/components/dropdown-list/dropdown-list.module';
import { ForumModule } from '@shared/components/forum/forum.module';
import { ButtonGroupModule } from '@shared/components/button-group/button-group.module';
import { LeaderboardModule } from './components/leaderboard/leaderboard.module';
import { LastGameModule } from './components/last-game/last-game.module';
import { ProfileCardModule } from './components/profile-card/profile-card.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NavigationModule,
    FindGameModule,
    ButtonGroupModule,
    DropdownListModule,
    ForumModule,
    LeaderboardModule,
    LastGameModule,
    ProfileCardModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
