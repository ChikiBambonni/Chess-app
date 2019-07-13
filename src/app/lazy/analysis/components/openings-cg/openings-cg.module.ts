import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningsCgComponent } from './openings-cg.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    OpeningsCgComponent
  ],
  exports: [
    OpeningsCgComponent
  ]
})
export class OpeningsCgModule { }
