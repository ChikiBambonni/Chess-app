import { Key, FEN } from 'chessground/types';

import { ChessTurn } from '@core/enums/chess.enums';
import { CgTurn } from '@core/interfaces/chess.interfaces';

export abstract class GlobalAnalysisUtils {

  constructor() {}

  getPreviousFen(currentFen: FEN, fenArr: FEN[]): FEN {
    const index = fenArr.findIndex(fen => fen === currentFen) - 1;

    return index >= 0 ? fenArr[index] : currentFen;
  }

  getNextFen(currentFen: FEN, fenArr: FEN[]): FEN {
    const index = fenArr.findIndex(fen => fen === currentFen) + 1;

    return index !== 0 && index < fenArr.length ? fenArr[index] : currentFen;
  }

  getLastFen(fenArr: FEN[]): FEN {
    return fenArr[fenArr.length - 1];
  }

  getFirstFen(fenArr: FEN[]): FEN {
    return fenArr[0];
  }

  getNextTurn(turn: CgTurn): ChessTurn {
    return turn === 'w' ? ChessTurn.Black : ChessTurn.White;
  }

  getN(moves: string): number { // TODO: define interface
    return Math.ceil(moves.split(' ').length / 2);
  }
}
