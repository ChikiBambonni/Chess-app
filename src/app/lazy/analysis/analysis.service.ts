import { Injectable } from '@angular/core';

import { ChessTurn } from '@core/enums/chess.enums';
import { ChessMove, CgTurn } from '@core/interfaces/chess.interfaces';
import { TableSelectedCell } from '@shared/components/common-table/common-table.interfaces';

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

    return index >= 0 ? fenArr[index] : currentFen;
  }

  static getNextFen(currentFen: string, fenArr: string[]): string {
    const index = fenArr.findIndex(fen => fen === currentFen) + 1;

    return index !== 0 && index < fenArr.length ? fenArr[index] : currentFen;
  }

  static getLastFen(fenArr: string[]): string {
    return fenArr[fenArr.length - 1];
  }

  static getFirstFen(fenArr: string[]): string {
    return fenArr[0];
  }

  static getNextTurn(turn: CgTurn): ChessTurn {
    return turn === 'w' ? ChessTurn.Black : ChessTurn.White;
  }

  static getN(moves: string): number { // TODO: define interface
    return Math.ceil(moves.split(' ').length / 2);
  }

  static getPrevMove(currentMove: TableSelectedCell, moves: ChessMove[]): TableSelectedCell {
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

  static getNextMove(currentMove: TableSelectedCell, moves: ChessMove[]): TableSelectedCell {
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

  static getFirstMove(moves: ChessMove[]): TableSelectedCell {
    return {
      N: 0,
      column: ChessTurn.White,
      value: moves[0].white
    };
  }

  static getLastMove(moves: ChessMove[]): TableSelectedCell {
    return {
      N: moves[moves.length - 1].N,
      column: moves[moves.length - 1].black ? ChessTurn.Black : ChessTurn.White,
      value: moves[moves.length - 1].black ? moves[moves.length - 1].black : moves[moves.length - 1].white
    };
  }
}
