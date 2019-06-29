import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPaginatorModule } from '@shared/components/common-paginator/common-paginator.module';
import { CommonTableModule } from '@shared/components/common-table/common-table.module';
import { LeaderboardComponent } from './leaderboard.component';
import { LeaderboardService } from './leaderboard.service';

@NgModule({
  imports: [
    CommonModule,
    CommonTableModule,
    CommonPaginatorModule
  ],
  declarations: [
    LeaderboardComponent
  ],
  exports: [
    LeaderboardComponent
  ],
  providers: [
    LeaderboardService
  ]
})
export class LeaderboardModule { }
