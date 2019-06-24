import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoComponent } from './account-info.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AccountInfoComponent
  ],
  exports: [
    AccountInfoComponent
  ]
})
export class AccountInfoModule { }
