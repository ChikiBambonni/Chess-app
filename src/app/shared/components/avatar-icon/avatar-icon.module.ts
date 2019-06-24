import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarIconComponent } from './avatar-icon.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AvatarIconComponent
  ],
  exports: [
    AvatarIconComponent
  ]
})
export class AccountInfoModule { }
