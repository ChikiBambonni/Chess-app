import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendListCardComponent } from './friend-list-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FriendListCardComponent
  ],
  exports: [
    FriendListCardComponent
  ]
})
export class FriendListCardModule { }
