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
    if (currentMove.N === 1 && currentMove.column === ChessTurn.White) {
      currentMove.N = 0;
      return currentMove;
    }

    const index = moves.findIndex(m => m.N === currentMove.N);

    if (index !== -1) {
      const isWhite = currentMove.column === ChessTurn.White;
      const move = isWhite ? (moves[index - 1] ? moves[index - 1] : { N: 0, black: '', white: ''}) : moves[index];

      return {
        N: move.N,
        column: isWhite ? ChessTurn.Black : ChessTurn.White,
        value:  isWhite ? move.black : move.white
      };
    }

    return currentMove;
  }

  getNextMove(currentMove: TableSelectedCell, moves: MovesTableItem[]): TableSelectedCell {
    if (currentMove.N === 0 && currentMove.column === ChessTurn.White) {
      currentMove.N = 1;
      return currentMove;
    } else if (currentMove.N === moves.length && currentMove.column === ChessTurn.Black) {
      return currentMove;
    }

    if (currentMove) {
      const index = moves.findIndex(m => m.N === currentMove.N);
      const isWhite = currentMove.column === ChessTurn.White;

      if (index !== -1) {
        const move =  moves[index];
        const nextMove = moves[index + 1];

        return {
          N: move.N + Number(!isWhite),
          column: isWhite ? ChessTurn.Black : ChessTurn.White,
          value:  isWhite ? move.black : (nextMove ? nextMove.white : move.black)
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
    const lastMove: MovesTableItem = moves[moves.length - 1];

    return {
      N: lastMove.N,
      column: lastMove.black ? ChessTurn.Black : ChessTurn.White,
      value: lastMove.black ? lastMove.black : lastMove.white
    };
  }
}
