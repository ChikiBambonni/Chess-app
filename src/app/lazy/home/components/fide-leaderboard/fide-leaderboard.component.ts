import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { SortDirection } from '@core/enums/sort.enums';

@Component({
  selector: 'app-fide-leaderboard',
  templateUrl: './fide-leaderboard.component.html',
  styleUrls: ['./fide-leaderboard.component.scss']
})
export class FideLeaderboardComponent implements OnInit, OnChanges {

  isLoadingResults = true;

  displayedColumns: string[] = ['position', 'name', 'country', 'rating', 'year'];
  dataSource: MatTableDataSource<any>;

  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 15,
    length: 0,
    previousPageIndex: 0
  };
  sortEvent: Sort = {
    active: 'position',
    direction: SortDirection.Asc
  };

  @Input()
  selectedTab: string;

  constructor (private repository: AppInfoRepository) {}

  ngOnInit() {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  sortData($event: Sort) {
    this.sortEvent = $event;
    this.fetchData();
  }

  changePage($event: PageEvent) {
    this.pageEvent = $event;
    this.fetchData();
  }

  fetchData(): void {
    this.getFIDETableList().subscribe((data: any) => {
      if (!this.dataSource) {
        this.dataSource = new MatTableDataSource();
      }
      this.dataSource.data = data.elements;
      this.pageEvent.length = data.totalElements;
      this.isLoadingResults = false;
    });
  }

  getParams(): object {
    return {
      orderByField: this.sortEvent.active,
      orderDirection: this.sortEvent.direction,
      pagesize: this.pageEvent.pageSize,
      page: this.pageEvent.pageIndex + 1
    };
  }

  getFIDETableList(): Observable<any> {
    return this.repository.getFIDETableList(this.getParams());
  }

  getAPPTableList(): Observable<any> {
    return this.repository.getAppTableList(this.getParams());
  }
}
