import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { ChessMove, CgMove } from '@core/interfaces/chess-move.interfaces';
import { UCI_COMMANDS } from '@core/constants/stockfish-worker.constants';
import { pushMove, appendMove, toFEN } from '@core/utils/chess.utils';
import { ArrowEvents } from '@core/enums/chess-events.enumn';
import { WorkerService } from '../../app-worker.service';
import { AnalysisService } from './analysis.service';
import { Opening } from './analysis.intefaces';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  fenArr: string[] = ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'];
  currentFEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  selectedCellValue = ''; // TODO: provide obj here like: {N:1, value: 'e2'}
  m = '';
  opening = 'Custom Variation';
  score = 0;
  data: ChessMove[] = [{ N: 1 }];

  constructor(private workerService: WorkerService) { }

  private setM() {
    this.workerService.postMessage(UCI_COMMANDS.startPosMove + this.m);
    this.workerService.postMessage(UCI_COMMANDS.goDepth);
  }

  ngOnInit() {
    this.workerService.workerUpdate$.subscribe(line => {
      this.score = Number(this.workerService.engineStatus.score);
    });
  }

  changeFEN($event: Opening) {
    this.data = AnalysisService.castChessMoves($event.m.split(' '));
    this.currentFEN = toFEN($event.m);
    this.opening = $event.n;
    this.m = $event.m;
    this.fenArr = [];
    this.setM();
  }

  onMove($event: CgMove) {
    this.currentFEN = $event.fen;
    this.data = pushMove(this.data, $event);
    this.m = appendMove($event, this.m);
    this.selectedCellValue = $event.to;
    this.fenArr.push(this.currentFEN);
    this.setM();
  }

  onArrowChange($event) {
    switch ($event.type) {
      case ArrowEvents.First: {
        this.currentFEN = AnalysisService.getFirstFen(this.fenArr);
        break;
      }
      case ArrowEvents.Next: {
        this.currentFEN = AnalysisService.getNextFen(this.currentFEN, this.fenArr);
        break;
      }
      case ArrowEvents.Prev: {
        this.currentFEN = AnalysisService.getPrevFen(this.currentFEN, this.fenArr);
        break;
      }
      case ArrowEvents.Last: {
        this.currentFEN = AnalysisService.getLastFen(this.fenArr);
        break;
      }
    }
  }
}
