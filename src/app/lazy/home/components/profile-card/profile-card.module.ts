import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonIconModule } from '@shared/components/common-icon/common-icon.module';
import { ChessgroundModule } from '@shared/components/chessground/chessground.module';
import { ProfileCardComponent } from './profile-card.component';

@NgModule({
  imports: [
    CommonModule,
    CommonIconModule,
    ChessgroundModule
  ],
  declarations: [
    ProfileCardComponent
  ],
  exports: [
    ProfileCardComponent
  ]
})
export class ProfileCardModule { }
