import { WorkerMessage } from './worker/app-workers/shared/worker-message.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { WORKER_TOPIC } from './worker/app-workers/shared/worker-topic.constants';
import { WorkerService } from './worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  workerTopic = WORKER_TOPIC.cpuIntensive;
  workerServiceSubscription: Subscription;

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.listenForWorkerResponse();
    this.workerService.doWork('d')
  }

  ngOnDestroy(): void {
    if (this.workerServiceSubscription) {
      this.workerServiceSubscription.unsubscribe();
    }
  }

  processInWorker() {
    // const workerMessage = new WorkerMessage(this.workerTopic, { duration: 3000 });
    // this.workerService.doWork(workerMessage);
  }

  private cpuIntensiveCalc(duration: number) {
      const before = new Date();
      let count = 0;
      while (true) {
        count++;
        const now = new Date();
        if (now.valueOf() - before.valueOf() > duration) {
          break;
        }
      }
      return { iteration: count };
    }
  private listenForWorkerResponse() {
      this.workerServiceSubscription = this.workerService.workerUpdate$
        .subscribe(data => this.workerResponseParser(data));
    }
private workerResponseParser(message: WorkerMessage) {
    if (message.topic === this.workerTopic) {
      // this.iterations = message.data.iteration;
    }
  }
}
