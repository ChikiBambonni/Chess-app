import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonIconModule } from '@shared/components/common-icon/common-icon.module';
import { ChessgroundStaticModule } from '@shared/components/chessground-static/chessground-static.module';
import { ProfileCardComponent } from './profile-card.component';

@NgModule({
  imports: [
    CommonModule,
    CommonIconModule,
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
