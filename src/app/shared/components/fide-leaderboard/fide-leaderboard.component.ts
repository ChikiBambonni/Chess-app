import { SortDirection } from '@core/enums/sort.enums';
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

  mockClass: LiderboardMocksClass; //  = new LiderboardMocksClass();
  displayedColumns: string[] = ['position', 'name', 'country', 'rating', 'year'];
  dataSource: MatTableDataSource<any>;//  = new MatTableDataSource(this.mockClass.getElements());

  ngOnInit() {
    this.mockClass = new LiderboardMocksClass();
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.mockClass.getData({
      pageSize: 15,
      pageNumber: 1,
      orderByField: 'year',
      orderDirection: SortDirection.Asc
    }).elements;
  }

  sortData($event: Sort) {
    const direction: SortDirection = $event.direction === 'asc' ? SortDirection.Asc : SortDirection.Desc;
    this.dataSource.data = this.mockClass.sort(this.mockClass.getElements(), $event.active, direction);
  }

  changePage($event: PageEvent) {
    console.log($event);
  }
}
