import { Injectable } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Injectable()
export class AnalysisService {

  constructor() {}

  static castChessMoves(m: string[]): ChessMove[] {
    const moves: ChessMove[] = [];
    for (let i = 0, k = 1; i < m.length; i += 2) {
      moves.push({ N: k++, white: m[i], black: m[i + 1] });
    }

    return moves;
  }

  static getPrevFen(fenString: string, fenArr: string[]): string {
    const index = fenArr.findIndex(fen => fen === fenString) - 1;

    if (index >= 0) {
      return fenArr[index];
    }

    return fenString;
  }
}
