import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { ChatAreaComponent } from './chat-area.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ChatAreaComponent
  ],
  exports: [
    ChatAreaComponent
  ]
})
export class ChatAreaModule { }
