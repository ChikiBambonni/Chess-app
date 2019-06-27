import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { ButtonGroupComponent } from './button-group.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ButtonGroupComponent
  ],
  exports: [
    ButtonGroupComponent
  ]
})
export class ButtonGroupModule { }
