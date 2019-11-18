import { Component, OnInit, OnDestroy, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';

import { WorkerService } from './app-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  ver = VERSION.full;

  workerServiceSubscription: Subscription;

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.listenForWorkerResponse();
  }

  ngOnDestroy(): void {
    if (this.workerServiceSubscription) {
      this.workerServiceSubscription.unsubscribe();
    }
  }

  private listenForWorkerResponse() {
    this.workerServiceSubscription = this.workerService.workerUpdate$
      .subscribe(data => console.log(data));
  }
}
