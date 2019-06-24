import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }
