import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarIconModule } from '@shared/components/avatar-icon/avatar-icon.module';
import { ChessgroundStaticModule } from '@shared/components/chessground-static/chessground-static.module';
import { ProfileCardComponent } from './profile-card.component';

@NgModule({
  imports: [
    CommonModule,
    AvatarIconModule,
    ChessgroundStaticModule
  ],
  declarations: [
    ProfileCardComponent
  ],
  exports: [
    ProfileCardComponent
  ]
})
export class ProfileCardModule { }
