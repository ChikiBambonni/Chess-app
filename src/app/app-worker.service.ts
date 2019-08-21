import { Injectable } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';

import { Safe } from '@core/decorators/safe.decorator';

@Injectable()
export class WorkerService {
  engineStatus: any = {};
  time = { wtime: 300000, btime: 300000, winc: 2000, binc: 2000, depth: 10 };
  isEngineRunning = false;
  readonly workerPath = 'assets/workers/stockfish.js';
  workerUpdate$: Observable<string>;

  private worker: Worker;
  private workerSubject: Subject<string>;

  constructor() {
    this.workerInit();
    setTimeout(() => {
      //this.postMessage('ucinewgame');
      //this.postMessage('isready');
      // this.postMessage('position startpos moves e2e4 e7e5 h2h4');
      // this.postMessage('go depth 1 wtime 300000 winc 2000 btime 300000 binc 2000');
      // this.postMessage('eval');
    }, 2000);
  }

  postMessage(workerMessage: string) {
    if (this.worker) {
      this.worker.postMessage(workerMessage);
    }
  }

  @Safe()
  workerInit(): void {
    if (!!this.worker === false) {
      this.worker = new Worker(this.workerPath);
      this.workerSubject = new Subject<string>();
      this.workerUpdate$ = this.workerSubject.asObservable();
      fromEvent(this.worker, 'message')
        .subscribe((response: MessageEvent) => {
          if (this.workerSubject) {
            this.onmessage(response.data, 'w');
            this.workerSubject.next(response.data);
          }
        }, (error) => console.error('WORKER ERROR::', error));
    }
  }

  onmessage($event: MessageEvent | string, turn: string) {
    let line = null;

    if ($event && typeof $event === 'object') {
      line = $event.data;
    } else {
      line = $event;
    }

    if (line === 'uciok') {
      this.engineStatus.engineLoaded = true;
    } else if (line === 'readyok') {
      this.engineStatus.engineReady = true;
    } else {
      let match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);

      if (match) {
        this.isEngineRunning = false;
      } else if (match = line.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/)) {
        this.engineStatus.search = 'Depth: ' + match[1] + ' Nps: ' + match[2];
      }

      if (match = line.match(/^info .*\bscore (\w+) (-?\d+)/)) {
        const score = parseInt(match[2], 10) * (turn === 'w' ? 1 : -1);

        if (match[1] === 'cp') {
          this.engineStatus.score = (score / 100.0).toFixed(2);
        } else if (match[1] === 'mate') {
          this.engineStatus.score = 'Mate in ' + Math.abs(score);
        }

        if (match = line.match(/\b(upper|lower)bound\b/)) {
          this.engineStatus.score = ((match[1] === 'upper') === (turn === 'w') ? '<= ' : '>= ') + this.engineStatus.score;
        }
      }
    }
  }
}
