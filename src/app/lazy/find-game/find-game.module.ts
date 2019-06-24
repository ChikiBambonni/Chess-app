import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FindGameRoutingModule } from './find-game-routing.module';
import { FindGameComponent } from './find-game.component';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    FindGameRoutingModule
  ],
  declarations: [
    FindGameComponent
  ]
})
export class FindGameModule { }
