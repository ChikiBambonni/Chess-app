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

  static getPrevFen(currentFen: string, fenArr: string[]): string {
    const index = fenArr.findIndex(fen => fen === currentFen) - 1;

    if (index >= 0) {
      return fenArr[index];
    }

    return currentFen;
  }

  static getNextFen(currentFen: string, fenArr: string[]): string {
    const index = fenArr.findIndex(fen => fen === currentFen) + 1;

    if (index !== 0 && index < fenArr.length) {
      return fenArr[index];
    }

    return currentFen;
  }

  static getLastFen(fenArr: string[]): string {
    return fenArr[fenArr.length - 1];
  }

  static getFirstFen(fenArr: string[]): string {
    return fenArr[0];
  }
}
