import { startingFEN, defaultOrientation } from './../../core/constants/chess.constants';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Color, Key, FEN } from 'chessground/types';

import { TableSelectedCell } from '@shared/components/common-table/common-table.interfaces';
import { MvNavigationEvents } from '@shared/components/mv-table-navigation/mv-table-navigation.enums';
import { MovesTableItem } from '@shared/components/moves-table/moves-table.interfaces';
import { CgMove } from '@core/interfaces/chess.interfaces';
import { UCI_COMMANDS, startingScore } from '@core/constants/stockfish-worker.constants';
import { pushMove, appendMove, toFEN } from '@core/utils/chess.utils';
import { WorkerService } from '../../app-worker.service';
import { AnalysisService } from './analysis.service';
import { Opening } from './analysis.intefaces';
import { startingFENArray } from '@core/constants/chess.constants';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  currentFEN: FEN = startingFEN;
  fenArr: FEN[] = startingFENArray;
  m = '';

  orientation: Color = defaultOrientation;
  score: number = startingScore;
  opening = 'Custom Variation';

  data: MovesTableItem[] = [{ N: 1 }];
  selectedCellValue: TableSelectedCell;

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
    this.data = AnalysisService.castChessMoves($event.m.split(' ') as Key[]);
    this.currentFEN = toFEN($event.m);
    this.opening = $event.n;
    this.m = $event.m;
    this.fenArr = [];
    this.setM();
  }

  onMove($event: CgMove) {
    this.currentFEN = $event.fen;
    this.selectedCellValue = { // TODO: define interface
      N: AnalysisService.getN(this.m),
      column: AnalysisService.getNextTurn($event.turn),
      value: $event.to
    };
    this.data = pushMove(this.data, $event);
    this.m = appendMove($event, this.m);
    this.fenArr.push(this.currentFEN);
    this.setM();
  }

  onArrowChange($event) {
    switch ($event.type) {
      case MvNavigationEvents.Flip: {
        this.orientation = this.orientation === 'white' ? 'black' : 'white';
        break;
      }
      case MvNavigationEvents.First: {
        this.currentFEN = AnalysisService.getFirstFen(this.fenArr);
        this.selectedCellValue = AnalysisService.getFirstMove(this.data);
        break;
      }
      case MvNavigationEvents.Next: {
        this.currentFEN = AnalysisService.getNextFen(this.currentFEN, this.fenArr);
        this.selectedCellValue = AnalysisService.getNextMove(this.selectedCellValue, this.data);
        break;
      }
      case MvNavigationEvents.Prev: {
        this.currentFEN = AnalysisService.getPrevFen(this.currentFEN, this.fenArr);
        this.selectedCellValue = AnalysisService.getPrevMove(this.selectedCellValue, this.data);
        break;
      }
      case MvNavigationEvents.Last: {
        this.currentFEN = AnalysisService.getLastFen(this.fenArr);
        this.selectedCellValue = AnalysisService.getLastMove(this.data);
        break;
      }
    }
  }
}
