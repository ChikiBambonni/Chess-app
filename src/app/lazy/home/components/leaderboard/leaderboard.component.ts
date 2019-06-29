import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';

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
  selectedTab: string;

  constructor(private boardService: LeaderboardService) {}

  ngOnInit() {
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

    if (this.selectedTab === LiderboardType.APP) {
      this.boardService.getAPPTableList(this.sortEvent, this.pageEvent)
        .subscribe((data: any) => this.setData(data));
    } else if (this.selectedTab === LiderboardType.FIDE) {
      this.boardService.getFIDETableList(this.sortEvent, this.pageEvent)
        .subscribe((data: any) => this.setData(data));
    }
  }

  setData(data: any) {
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource();
    }
    this.displayedColumns = Object.keys(data.elements[0]);
    this.dataSource.data = data.elements;
    this.pageEvent.length = data.totalElements;
    this.isLoadingResults = false;
  }
}
