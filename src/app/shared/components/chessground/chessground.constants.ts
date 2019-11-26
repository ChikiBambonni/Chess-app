import { take } from 'rxjs/operators';
import { Role } from 'chessground/types';
import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

import { CgMove } from '@core/interfaces/chess.interfaces';
import { toVertical, toColor, toPromotion, toDests } from '@core/utils/chess.utils';
import { PromotionChoiceService } from '../promotion-choice/promotion-choice.service';
import { EventEmitter, Output } from '@angular/core';

export abstract class ChessgroundBase {

  @Output()
  protected cgMove = new EventEmitter<CgMove>();

  protected cg: Api = null;
  protected chess: Chess = null;

  constructor(protected promotionService: PromotionChoiceService) {
    this.chess = new Chess();
  }

  protected playOtherSide = (move: CgMove) => {
    if (move.promotion) {
      this.promotionService.setPromotion({ column: toVertical(move.to), color: this.chess.turn() });
      this.promotionService.promotion$.pipe(take(1)).subscribe((role: Role) => {
        this.cg.setPieces({ [move.to]: { role , color: toColor(this.chess), promoted: true} });
        this.chess.move({ from: move.from, to: move.to, promotion: toPromotion(role) });
        this.cg.set({
          turnColor: toColor(this.chess),
          movable: {
            color: toColor(this.chess),
            dests: toDests(this.chess)
          }
        });
        this.cgMove.emit(move);
      });
    } else {
      this.chess.move({ from: move.from, to: move.to });
      this.cgMove.emit(move);
    }
  }
}
