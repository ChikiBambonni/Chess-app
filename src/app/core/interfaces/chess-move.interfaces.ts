import { Key } from 'chessground/types';

export type CgTurn = 'b' | 'w';

export interface ChessMove {
  N: number;
  white?: string;
  black?: string;
}

export interface CgMove {
  from: Key;
  to: Key;
  turn: CgTurn;
}
