import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { WorkerService } from '../../../../app-worker.service';
import { ChessMove } from '@core/interfaces/chess-move.interfaces';
import { TrackChanges } from '@core/decorators/changes.decorator';
import { ChangesStrategy } from '@core/enums/changes-strategy.emuns';

@Component({
  selector: 'app-openings-mt',
  templateUrl: './openings-mt.component.html',
  styleUrls: ['./openings-mt.component.scss']
})
export class OpeningsMtComponent implements OnInit, OnChanges {

  min = -20;
  max = 20;
  score = 0;

  @Input()
  data: ChessMove[];

  @Input()
  m: string;

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

  @TrackChanges('m', 'setM', ChangesStrategy.NonFirst)
  ngOnChanges(changes: SimpleChanges) {
  }
}
