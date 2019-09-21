import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvTableNavigationComponent } from './mv-table-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MvTableNavigationComponent
  ],
  exports: [
    MvTableNavigationComponent
  ]
})
export class MvTableNavigationModule { }
