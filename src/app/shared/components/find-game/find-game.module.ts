import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { FindGameComponent } from './find-game.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FindGameComponent
  ],
  exports: [
    FindGameComponent
  ]
})
export class FindGameModule { }
