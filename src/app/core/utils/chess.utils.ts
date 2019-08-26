import { EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as Chess from 'chess.js';
import { Api } from 'chessground/api';
import * as _ from 'lodash';

import { Config } from 'chessground/config';
import { Color, Role, Key } from 'chessground/types';

import { CgMove, CgTurn, ChessMove } from '@core/interfaces/chess-move.interfaces';

export const pushMove = (data: ChessMove[], { to, turn }: { to: Key, turn: CgTurn }): ChessMove[] => {
  let moves: ChessMove[] = [...data];
  const last: ChessMove = _.last(moves);
  const color = turn === 'w' ? 'black' : 'white';
  if (last[color] !== undefined) {
    const row = {} as ChessMove;
    row.N = last.N + 1;
    row[color] = to;
    moves = [...moves, row];
  } else {
    last[color] = to;
  }

  return moves;
};

export const appendMove = (move: CgMove, moves: string) => {
  const { from, to } = move;
  return `${moves} ${from}${to}`;
};

const randomPlay = (cg: Api, chess: Chess, cgMove: EventEmitter<any> = null) => {
  setTimeout(() => {
    const moves = chess.moves({ verbose: true });
    const move = moves[Math.floor(Math.random() * moves.length)];

    chess.move(move.san);
    cg.move(move.from, move.to);
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess)
      }
    });
    cg.playPremove();
    if (cgMove) {
      cgMove.emit({from: move.from, to: move.to, turn: chess.turn() });
    }
  }, 1000);
};

export const calZoom = (width: number) => {
  const koef = Math.floor(width / 3.2), clientWidth = document.body.clientWidth;
  return Math.floor(clientWidth * koef / 1910);
};

export const defConfig = (chess: Chess, orien: Color): Config => {
  return {
    orientation: orien,
    highlight: {
      lastMove: true,
      check: true
    },
    animation: {
      enabled: true,
      duration: 200
    },
    movable: {
      color: 'white',
      free: false,
      dests: toDests(chess),
      showDests: true,
    },
    drawable: {
      enabled: true,
      visible: true
    },
    events: {
      change: () => {}
    }
  };
};

export const isPromotion = (chess: Chess) => {
  const moves = chess.moves({ verbode: true });
  return moves.some(m => m.includes('='));
};

export const toDests = (chess: Chess) => {
  const dests = {};
  chess.SQUARES.forEach(s => {
    const ms = chess.moves({square: s, verbose: true});
    if (ms.length) {
      dests[s] = ms.map(m => m.to);
    }
  });
  return dests;
};

const toVertical = (move: Key) => {
  const vericals = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  return vericals.indexOf(move.substring(0, 1)) + 1;
};

export const toColor = (chess: Chess) => (chess.turn() === 'w')  ? 'white' : 'black';
export const toPromotion = (role: Role) => role.substring(0, 1);

export const playOtherSide = (cg: Api, chess: Chess, cgMove: EventEmitter<CgMove> = null) => {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess)
      }
    });
    if (cgMove) {
      cgMove.emit({from: orig, to: dest, turn: chess.turn(), fen: chess.fen() });
    }
  };
};

export const aiPlay = (cg: Api, chess: Chess, promotionSubject: Subject<any>, cgMove: EventEmitter<CgMove> = null) => {
  return (orig, dest) => {
    if (isPromotion(chess)) {
      promotionSubject.next({ column: toVertical(dest), color: chess.turn() });
      promotionSubject.pipe(take(1)).subscribe((role: Role) => {
        cg.setPieces({ [dest]: { role , color: toColor(chess), promoted: true} });
        chess.move({ from: orig, to: dest, promotion: toPromotion(role) });
        if (cgMove) {
          cgMove.emit({from: orig, to: dest, turn: chess.turn(), fen: chess.fen() });
        }
        randomPlay(cg, chess, cgMove);
      });
    } else {
      chess.move({ from: orig, to: dest });
      if (cgMove) {
        cgMove.emit({from: orig, to: dest, turn: chess.turn(), fen: chess.fen() });
      }
      randomPlay(cg, chess, cgMove);
    }
  };
};

export const opPlay = (cg: Api, chess: Chess, cgMove: EventEmitter<CgMove> = null) => {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    if (cgMove) {
      cgMove.emit({from: orig, to: dest, turn: chess.turn(), fen: chess.fen() });
    }
  };
};
