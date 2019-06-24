import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPaginatorComponent } from './common-paginator.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CommonPaginatorComponent
  ],
  exports: [
    CommonPaginatorComponent
  ]
})
export class CommonPaginatorModule { }
