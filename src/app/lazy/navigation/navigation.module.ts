import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NavigationRoutingModule
  ],
  declarations: [
    NavigationComponent
  ]
})
export class NavigationModule { }
