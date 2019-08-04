import { Injectable } from '@angular/core';
import { Subject, Observable, fromEvent } from 'rxjs';

import { Safe } from '@core/decorators/safe.decorator';

@Injectable()
export class WorkerService {
  readonly workerPath = 'assets/workers/stockfish.js';
  workerUpdate$: Observable<string>;

  private worker: Worker;
  private workerSubject: Subject<string>;

  constructor() {
    this.workerInit();
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
            this.workerSubject.next(response.data);
          }
        }, (error) => console.error('WORKER ERROR::', error));
    }
  }
}
