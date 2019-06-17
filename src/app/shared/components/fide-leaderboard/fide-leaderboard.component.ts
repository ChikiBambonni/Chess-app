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

  mockClass: LiderboardMocksClass;
  displayedColumns: string[] = ['position', 'name', 'country', 'rating', 'year'];
  dataSource: MatTableDataSource<any>;
  sortStatus = {
    field: 'position',
    direction: SortDirection.Asc
  };
  pageStatus = {
    pageSize: 15,
    pageNumber: 1,
  };

  ngOnInit() {
    this.mockClass = new LiderboardMocksClass();
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.mockClass.getData({
      pageSize: 15,
      pageNumber: 1,
      orderByField: this.sortStatus.field,
      orderDirection: this.sortStatus.direction
    }).elements;
  }

  sortData($event: Sort) {
    const direction: SortDirection = $event.direction === 'asc' ? SortDirection.Asc : SortDirection.Desc;
    this.sortStatus.direction = direction;
    this.sortStatus.field = $event.active;

    this.dataSource.data = this.mockClass.getData({
      pageSize:  this.pageStatus.pageSize,
      pageNumber:  this.pageStatus.pageNumber,
      orderByField: this.sortStatus.field,
      orderDirection: this.sortStatus.direction
    }).elements;
  }

  changePage($event: PageEvent) {
    this.pageStatus.pageSize = $event.pageSize;
    this.pageStatus.pageNumber = $event.pageIndex + 1;

    this.dataSource.data = this.mockClass.getData({
      pageSize:  this.pageStatus.pageSize,
      pageNumber:  this.pageStatus.pageNumber,
      orderByField: this.sortStatus.field,
      orderDirection: this.sortStatus.direction
    }).elements;
  }
}
