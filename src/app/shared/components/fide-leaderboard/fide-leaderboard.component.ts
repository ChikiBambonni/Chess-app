import { LiderboardMocksClass } from './../../../core/mock-backend/mocks/liderboard/liderboard.class';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-fide-leaderboard',
  templateUrl: './fide-leaderboard.component.html',
  styleUrls: ['./fide-leaderboard.component.scss']
})
export class FideLeaderboardComponent implements OnInit {

  mockClass: LiderboardMocksClass = new LiderboardMocksClass();
  displayedColumns: string[] = ['position', 'name', 'country', 'rating', 'year'];
  dataSource = new MatTableDataSource(this.mockClass.getData(null));

  ngOnInit() {
  }

  sortData($event: Sort) {
    console.log($event);
    console.log(this.dataSource);
  }

  changePage($event: PageEvent) {
    console.log($event);
  }
}
