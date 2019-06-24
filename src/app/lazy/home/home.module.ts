import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AccountInfoModule } from '@shared/components/account-info/account-info.module';
import { AvatarIconModule } from '@shared/components/avatar-icon/avatar-icon.module';
import { DropdownListModule } from '@shared/components/dropdown-list/dropdown-list.module';
import { ForumModule } from '@shared/components/forum/forum.module';
import { MaterialModule } from '@material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    AccountInfoModule,
    AvatarIconModule,
    DropdownListModule,
    ForumModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
