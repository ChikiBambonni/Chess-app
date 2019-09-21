import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonIconModule } from '@shared/components/common-icon/common-icon.module';
import { MvTableNavigationComponent } from './mv-table-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    CommonIconModule
  ],
  declarations: [
    MvTableNavigationComponent
  ],
  exports: [
    MvTableNavigationComponent
  ]
})
export class MvTableNavigationModule { }
