import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { CommonPaginatorComponent } from './common-paginator.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    CommonPaginatorComponent
  ],
  exports: [
    CommonPaginatorComponent
  ]
})
export class CommonPaginatorModule { }
