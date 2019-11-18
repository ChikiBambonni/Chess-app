import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

import { TrackChanges } from '@core/decorators/changes.decorator';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { LiderboardType } from './leaderboard.enums';
import { LeaderboardService } from './leaderboard.service';
import { pageEvent, sortEvent } from './leaderboard.constants';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit, OnChanges {

  isLoadingResults = true;

  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  pageEvent: PageEvent = pageEvent;
  sortEvent: Sort = sortEvent;

  @Input()
  selectedTab: LiderboardType;

  constructor(private lbService: LeaderboardService) {}

  ngOnInit() {
  }

  @TrackChanges('selectedTab', 'fetchData')
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
    this.isLoadingResults = true;
    this.lbService.getTableData(this.selectedTab, this.sortEvent, this.pageEvent)
      .subscribe((data: PaginationInterface<any>) => this.setData(data));
  }

  setData(data: PaginationInterface<any>) {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = Object.keys(data.elements[0] || {});
    this.dataSource.data = data.elements;
    this.pageEvent.length = data.totalElements;
    this.isLoadingResults = false;
  }
}
