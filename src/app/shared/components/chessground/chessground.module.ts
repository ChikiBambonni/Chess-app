import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionChoiceModule } from '@shared/components/promotion-choice/promotion-choice.module';
import { PromotionChoiceComponent } from '@shared/components/promotion-choice/promotion-choice.component';
import { ChessgroundComponent } from './chessground.component';

@NgModule({
  imports: [
    CommonModule,
    PromotionChoiceModule
  ],
  declarations: [
    ChessgroundComponent
  ],
  exports: [
    ChessgroundComponent
  ],
  entryComponents: [
    PromotionChoiceComponent
  ]
})
export class ChessgroundModule { }
