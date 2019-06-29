import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { SortDirection } from '@core/enums/sort.enums';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit, OnChanges {

  isLoadingResults = true;

  displayedColumns: string[];
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
    this.fetchData();
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
    this.isLoadingResults = true;
    if (this.selectedTab === 'APP') {
      this.getAPPTableList().subscribe((data: any) => {
        if (!this.dataSource) {
          this.dataSource = new MatTableDataSource();
        }
        this.displayedColumns = Object.keys(data.elements[0]);
        this.dataSource.data = data.elements;
        this.pageEvent.length = data.totalElements;
        this.isLoadingResults = false;
      });
    } else if (this.selectedTab === 'FIDE') {
      this.getFIDETableList().subscribe((data: any) => {
        if (!this.dataSource) {
          this.dataSource = new MatTableDataSource();
        }
        this.displayedColumns = Object.keys(data.elements[0]);
        this.dataSource.data = data.elements;
        this.pageEvent.length = data.totalElements;
        this.isLoadingResults = false;
      });
    }
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
