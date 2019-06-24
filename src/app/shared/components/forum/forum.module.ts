import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumComponent } from './forum.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ForumComponent
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumModule { }
