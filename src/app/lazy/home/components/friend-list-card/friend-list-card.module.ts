import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownListModule } from '@shared/components/dropdown-list/dropdown-list.module';
import { FriendListCardComponent } from './friend-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownListModule
  ],
  declarations: [
    FriendListCardComponent
  ],
  exports: [
    FriendListCardComponent
  ]
})
export class FriendListCardModule { }
