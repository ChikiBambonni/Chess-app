import { Injectable } from '@angular/core';
import { Key } from 'chessground/types';

import { TableSelectedCell } from '@shared/components/common-table/common-table.interfaces';
import { MovesTableItem } from '@shared/components/moves-table/moves-table.interfaces';
import { GlobalAnalysisUtils } from '@core/utils/global-analysis-utils.class';
import { ChessTurn } from '@core/enums/chess.enums';

@Injectable()
export class AnalysisService extends GlobalAnalysisUtils {

  constructor() {
    super();
  }

  castChessMoves(m: Key[]): MovesTableItem[] {
    const moves: MovesTableItem[] = [];
    for (let i = 0, k = 1; i < m.length; i += 2) {
      moves.push({ N: k++, white: m[i], black: m[i + 1] });
    }

    return moves;
  }

  getPrevMove(currentMove: TableSelectedCell, moves: MovesTableItem[]): TableSelectedCell {
    if (currentMove) {
      const index = moves.findIndex(m => m.N === currentMove.N);
      const isWhite = currentMove.column === ChessTurn.White;

      if (index !== -1) {
        return {
          N: isWhite ? moves[index].N - 1 : moves[index].N , // TODO: Define enum
          column: isWhite ? ChessTurn.Black : ChessTurn.White,
          value:  isWhite && moves[index - 1] ? moves[index - 1].black : moves[index].white
        };
      }
    }

    return currentMove;
  }

  getNextMove(currentMove: TableSelectedCell, moves: MovesTableItem[]): TableSelectedCell {
    if (currentMove) {
      const index = moves.findIndex(m => m.N === currentMove.N);
      const isWhite = currentMove.column === ChessTurn.White;

      if (index !== -1) {
        return {
          N: isWhite ? moves[index].N : moves[index].N + 1 , // TODO: Define enum
          column: isWhite ? ChessTurn.Black : ChessTurn.White,
          value:  isWhite ? moves[index].black : (moves[index + 1] ? moves[index + 1].white : moves[index].black)
        };
      }
    }

    return currentMove;
  }

  getFirstMove(moves: MovesTableItem[]): TableSelectedCell {
    return {
      N: 0,
      column: ChessTurn.White,
      value: moves[0].white
    };
  }

  getLastMove(moves: MovesTableItem[]): TableSelectedCell {
    return {
      N: moves[moves.length - 1].N,
      column: moves[moves.length - 1].black ? ChessTurn.Black : ChessTurn.White,
      value: moves[moves.length - 1].black ? moves[moves.length - 1].black : moves[moves.length - 1].white
    };
  }
}
