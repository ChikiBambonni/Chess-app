import { HttpClient } from '@angular/common/http';
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

  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 15,
    length: 100,
    previousPageIndex: 0
  };
  sortEvent: Sort = {
    active: 'position',
    direction: SortDirection.Asc
  };

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.mockClass = new LiderboardMocksClass();
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.getData(this.pageEvent, this.sortEvent);

    this.http.get('/mapi/ChikiBambuki/FIDELeaderboard').subscribe(data => {
      console.log(data);
    })
  }

  sortData($event: Sort) {
    this.sortEvent = $event;
    this.dataSource.data = this.getData(this.pageEvent, this.sortEvent);
  }

  changePage($event: PageEvent) {
    this.pageEvent = $event;
    this.dataSource.data = this.getData(this.pageEvent, this.sortEvent);
  }

  getSortDirection(sort: Sort) {
    return sort.direction === 'asc' ? SortDirection.Asc : SortDirection.Desc;
  }

  getData(page: PageEvent, sort: Sort) {
    return this.mockClass.getData({
      pageSize:  page.pageSize,
      pageNumber:  page.pageIndex + 1,
      orderByField: sort.active,
      orderDirection: this.getSortDirection(sort)
    }).elements;
  }
}
