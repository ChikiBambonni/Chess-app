import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { SortDirection } from '@core/enums/sort.enums';

@Component({
  selector: 'app-fide-leaderboard',
  templateUrl: './fide-leaderboard.component.html',
  styleUrls: ['./fide-leaderboard.component.scss']
})
export class FideLeaderboardComponent implements OnInit {

  isLoadingResults = true;

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

  constructor (private repository: AppInfoRepository) {}

  ngOnInit() {
    this.fetchData();
  }

  sortData($event: Sort) {
    this.isLoadingResults = true;
    this.sortEvent = $event;
    this.fetchData();
  }

  changePage($event: PageEvent) {
    this.isLoadingResults = true;
    this.pageEvent = $event;
    this.fetchData();
  }

  fetchData(): void {
    this.repository.getFIDETableList({
      orderByField: this.sortEvent.active,
      orderDirection: this.sortEvent.direction,
      pagesize: this.pageEvent.pageSize,
      page: this.pageEvent.pageIndex + 1
    }).subscribe((data: any) => {
      if (!this.dataSource) {
        this.dataSource = new MatTableDataSource();
      }
      this.dataSource.data = data.elements;
      this.isLoadingResults = false;
    });
  }
}
