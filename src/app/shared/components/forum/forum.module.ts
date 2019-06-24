import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { ForumComponent } from './forum.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ForumComponent
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumModule { }
