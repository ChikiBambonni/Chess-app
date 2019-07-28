import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineGaugeComponent } from './engine-gauge.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EngineGaugeComponent
  ],
  exports: [
    EngineGaugeComponent
  ]
})
export class EngineGaugeModule { }
