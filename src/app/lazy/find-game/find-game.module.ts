import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindGameRoutingModule } from './find-game-routing.module';
import { FindGameComponent } from './find-game.component';

@NgModule({
  imports: [
    CommonModule,
    FindGameRoutingModule
  ],
  declarations: [
    FindGameComponent
  ]
})
export class FindGameModule { }
