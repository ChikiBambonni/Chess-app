import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { WorkerService } from '../../app-worker.service';
import { ChessMove, CgMove } from '@core/interfaces/chess-move.interfaces';
import { pushMove } from '@core/utils/chess.utils';
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
  score = 0;
  data: ChessMove[] = [{ N: 1 }];

  constructor(private workerService: WorkerService) { }

  private setM() {
    this.workerService.postMessage(`position startpos moves ${this.m}`);
    this.workerService.postMessage('go depth 1 wtime 300000 winc 2000 btime 300000 binc 2000');
  }

  ngOnInit() {
    this.workerService.workerUpdate$.subscribe(line => {
      this.score = Number(this.workerService.engineStatus.score);
    });
  }

  changeFEN($event: Opening) {
    this.data = AnalysisService.castChessMoves($event.m.split(' '));
    this.fen = $event.f;
    this.opening = $event.n;
    this.m = $event.m;
    this.setM();
  }

  onMove($event: CgMove) {
    this.data = pushMove(this.data, $event);
    this.setM();
    console.log('Move', $event, this.m);
  }
}
