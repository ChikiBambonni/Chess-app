import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
