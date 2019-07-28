import { ChessMove } from './../../core/interfaces/chess-move.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  fen: string = null;
  data: ChessMove[] = [];

  constructor() { }

  ngOnInit() {
  }

  changeFEN($event) {
    console.log($event.m.split(' '));
    const rowMoves = $event.m.split(' ');
    const moves: ChessMove[] = [];
    for (let i = 0, k = 1; i < rowMoves.length; i += 2) {
      moves.push({ N: k, white: rowMoves[i], black: rowMoves[i + 1]});
      k++;
    }
    this.data = moves;
    this.fen = $event.f;
  }
}
