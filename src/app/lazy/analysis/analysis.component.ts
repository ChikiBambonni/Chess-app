import { Component, OnInit } from '@angular/core';
import { Key } from 'chessground/types';
import * as _ from 'lodash';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { AnalysisService } from './analysis.service';
import { Opening } from './analysis.intefaces';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  fen: string = null;
  m: string = null;
  opening = 'Custom Variation';
  data: ChessMove[] = [{ N: 1 }];

  constructor() { }

  ngOnInit() {
  }

  changeFEN($event: Opening) {
    this.data = AnalysisService.castChessMoves($event.m.split(' '));
    this.fen = $event.f;
    this.opening = $event.n;
    this.m = $event.m;
  }

  onMove($event) {
    console.log($event)
    this.updateData($event);
  }

  updateData({ to, turn }: { to: Key, turn: string }) {
    const last: ChessMove = _.last(this.data);
    const color = turn === 'w' ? 'black' : 'white';
    if (last[color] !== undefined) {
      const row = {} as ChessMove;
      row.N = last.N + 1;
      row[color] = to;
      this.data = [...this.data, row];
    } else {
      last[color] = to;
    }
  }
}
