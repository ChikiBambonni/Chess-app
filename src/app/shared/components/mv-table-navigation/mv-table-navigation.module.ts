import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonIconModule } from '@shared/components/common-icon/common-icon.module';
import { MvTableNavigationComponent } from './mv-table-navigation.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  imports: [
    CommonModule,
    CommonIconModule,
    MaterialModule
  ],
  declarations: [
    MvTableNavigationComponent
  ],
  exports: [
    MvTableNavigationComponent
  ]
})
export class MvTableNavigationModule { }
