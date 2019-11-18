import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { sortEvent, pageEvent } from './openings-table.constants';

@Component({
  selector: 'app-openings-table',
  templateUrl: './openings-table.component.html',
  styleUrls: ['./openings-table.component.scss']
})
export class OpeningsTableComponent implements OnInit {

  isLoadingResults = true;

  displayedColumns: string[] = ['c', 'n'];
  dataSource: MatTableDataSource<any>;

  pageEvent: PageEvent = pageEvent;
  sortEvent: Sort = sortEvent;

  @Output()
  rowClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private repository: AppInfoRepository) { }

  ngOnInit() {
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

  onRowClick($event) {
    this.rowClick.emit($event);
  }

  fetchData(): void {
    this.isLoadingResults = true;
    this.repository.getOpeningsList({
      orderByField: this.sortEvent.active,
      orderDirection: this.sortEvent.direction,
      pagesize: this.pageEvent.pageSize,
      page: this.pageEvent.pageIndex + 1
    }).subscribe((data: PaginationInterface<any>) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data.elements;
      this.pageEvent.length = data.totalElements;
      this.isLoadingResults = false;
    });
  }
}
