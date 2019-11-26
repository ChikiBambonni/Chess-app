import { Injectable } from '@angular/core';
import * as Chess from 'chess.js';
import { Api } from 'chessground/api';
import { FEN, Color } from 'chessground/types';

import { toColor, toDests } from '@core/utils/chess.utils';

@Injectable()
export class ChessgroundService {

  constructor() { }

  setZoom(el: HTMLElement, zoom: number) {
    if (el) {
      const px = `${zoom / 100 * 320}px`;
      el.style.width = px;
      el.style.height = px;
      document.body.dispatchEvent(new Event('chessground.resize'));
    }
  }

  setFEN(chess: Chess, cg: Api, fen: FEN) {
    if (chess.validate_fen(fen).valid) {
      chess.load(fen);
      cg.set({
        fen,
        turnColor: toColor(chess),
        movable: {
          color: toColor(chess),
          dests: toDests(chess)
        }
      });
    } else {
      console.error('Error setting fen');
    }
  }

  setOrientation(cg: Api, orientation: Color) {
    cg.set({ orientation });
  }
}
