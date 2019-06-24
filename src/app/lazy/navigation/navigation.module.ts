import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@material/material.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavigationRoutingModule
  ],
  declarations: [
    NavigationComponent
  ]
})
export class NavigationModule { }
