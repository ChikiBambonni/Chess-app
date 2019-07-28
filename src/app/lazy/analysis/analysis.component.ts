import { Component, OnInit } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { AnalysisService } from './analysis.service';

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
    this.data = AnalysisService.castChessMoves($event.m.split(' '));
    this.fen = $event.f;
  }
}
