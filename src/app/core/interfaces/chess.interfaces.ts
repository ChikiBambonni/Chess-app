import { Key, FEN } from 'chessground/types';

export type CgTurn = 'b' | 'w';

export interface CgMove {
  from: Key;
  to: Key;
  turn: CgTurn;
  fen: FEN;
}
