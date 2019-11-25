import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionChoiceComponent } from './promotion-choice.component';
import { PromotionChoiceService } from './promotion-choice.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PromotionChoiceComponent
  ],
  exports: [
    PromotionChoiceComponent
  ],
  providers: [
    PromotionChoiceService
  ]
})
export class PromotionChoiceModule { }
