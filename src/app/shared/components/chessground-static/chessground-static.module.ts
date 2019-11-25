import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionChoiceModule } from '@shared/components/promotion-choice/promotion-choice.module';
import { PromotionChoiceComponent } from '@shared/components/promotion-choice/promotion-choice.component';
import { ChessgroundStaticComponent } from './chessground-static.component';

@NgModule({
  imports: [
    CommonModule,
    PromotionChoiceModule
  ],
  declarations: [
    ChessgroundStaticComponent
  ],
  exports: [
    ChessgroundStaticComponent
  ],
  entryComponents: [
    PromotionChoiceComponent
  ]
})
export class ChessgroundStaticModule { }
