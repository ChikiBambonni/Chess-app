import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonTableModule } from '@shared/components/common-table/common-table.module';
import { MaterialModule } from '@material/material.module';
import { ForumComponent } from './forum.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CommonTableModule
  ],
  declarations: [
    ForumComponent
  ],
  exports: [
    ForumComponent
  ]
})
export class ForumModule { }
