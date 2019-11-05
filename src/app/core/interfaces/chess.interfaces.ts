import { Key, FEN } from 'chessground/types';

export type CgTurn = 'b' | 'w';

export interface ChessMove {
  N: number;
  white?: Key;
  black?: Key;
}

export interface CgMove {
  from: Key;
  to: Key;
  turn: CgTurn;
  fen: FEN;
}
