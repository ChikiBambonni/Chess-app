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
    console.log($event);
    this.fen = $event.f;
  }
}
