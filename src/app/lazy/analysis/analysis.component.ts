import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Color, Key, FEN } from 'chessground/types';

import { TableSelectedCell } from '@shared/components/common-table/common-table.interfaces';
import { MvNavigationEvents } from '@shared/components/mv-table-navigation/mv-table-navigation.enums';
import { MovesTableItem } from '@shared/components/moves-table/moves-table.interfaces';
import { CgMove, PGN } from '@core/interfaces/chess.interfaces';
import { UCI_COMMANDS, startingScore } from '@core/constants/stockfish-worker.constants';
import { pushMove, appendMove, toFEN } from '@core/utils/chess.utils';
import { startingFENArray } from '@core/constants/chess.constants';
import { startingFEN, defaultOrientation } from '@core/constants/chess.constants';
import { WorkerService } from '../../app-worker.service';
import { AnalysisService } from './analysis.service';
import { Opening } from './analysis.intefaces';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  currentFEN: FEN = startingFEN;
  fenArr: FEN[] = startingFENArray;
  pgn: PGN = ''; // TODO: add numeration to string

  orientation: Color = defaultOrientation;
  score: number = startingScore;
  opening = 'Custom Variation';

  data: MovesTableItem[] = [{ N: 1 }];
  selectedCellValue: TableSelectedCell;

  constructor(
    private analysisService: AnalysisService,
    private workerService: WorkerService) { }

  private setM() {
    this.workerService.postMessage(UCI_COMMANDS.startPosMove + this.pgn);
    this.workerService.postMessage(UCI_COMMANDS.goDepth);
  }

  ngOnInit() {
    this.workerService.workerUpdate$.subscribe(() => {
      this.score = Number(this.workerService.engineStatus.score);
    });
  }

  changeFEN($event: Opening) {
    this.data = this.analysisService.castChessMoves($event.m.split(' ') as Key[]);
    this.currentFEN = toFEN($event.m);
    this.opening = $event.n;
    this.pgn = $event.m;
    this.fenArr = [];
    this.setM();
  }

  onMove($event: CgMove) {
    this.currentFEN = $event.fen;
    this.selectedCellValue = AnalysisService.createMove(
      this.analysisService.getN(this.pgn),
      this.analysisService.getNextTurn($event.turn),
      $event.to
    );
    this.data = pushMove(this.data, $event);
    this.pgn = appendMove($event, this.pgn);
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
        this.currentFEN = this.analysisService.getFirstFen(this.fenArr);
        this.selectedCellValue = this.analysisService.getFirstMove(this.data);
        break;
      }
      case MvNavigationEvents.Next: {
        this.currentFEN = this.analysisService.getNextFen(this.currentFEN, this.fenArr);
        this.selectedCellValue = this.analysisService.getNextMove(this.selectedCellValue, this.data);
        break;
      }
      case MvNavigationEvents.Prev: {
        this.currentFEN = this.analysisService.getPreviousFen(this.currentFEN, this.fenArr);
        this.selectedCellValue = this.analysisService.getPrevMove(this.selectedCellValue, this.data);
        break;
      }
      case MvNavigationEvents.Last: {
        this.currentFEN = this.analysisService.getLastFen(this.fenArr);
        this.selectedCellValue = this.analysisService.getLastMove(this.data);
        break;
      }
    }
  }
}
