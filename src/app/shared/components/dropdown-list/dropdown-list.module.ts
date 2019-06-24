import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownListComponent } from './dropdown-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DropdownListComponent
  ],
  exports: [
    DropdownListComponent
  ]
})
export class DropdownListModule { }
