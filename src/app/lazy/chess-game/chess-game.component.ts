import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import { Key } from 'chessground/types';

import { MoveConfig } from '@core/interfaces/socket.interfaces';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';
import { MovesTableItem } from '@shared/components/moves-table/moves-table.interfaces';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  data: MovesTableItem[] = [{ N: 1 }];

  constructor(
    private chessService: ChessGameService) { }

  ngOnInit() {}

  cgMove($event: MoveConfig) {
    // this.updateData($event);
    // this.chessService.emitEvent('makeMove', Object.assign($event, { room: this.chessService.gameID }));
  }

  updateData({ to, turn }: { to: Key, turn: string }) { // TODO: remove this logic
  //   const last: MovesTableItem = _.last(this.data);
  //   const color = turn === 'w' ? 'black' : 'white';
  //   if (last[color] !== undefined) {
  //     const row = {} as MovesTableItem;
  //     row.N = last.N + 1;
  //     row[color] = to;
  //     this.data = [...this.data, row];
  //   } else {
  //     last[color] = to;
  //   }
  }
}
