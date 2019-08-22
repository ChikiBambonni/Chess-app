import { Component, OnInit } from '@angular/core';

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
}
