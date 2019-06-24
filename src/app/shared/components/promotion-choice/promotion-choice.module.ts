import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionChoiceComponent } from './promotion-choice.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PromotionChoiceComponent
  ],
  exports: [
    PromotionChoiceComponent
  ]
})
export class PromotionChoiceModule { }
