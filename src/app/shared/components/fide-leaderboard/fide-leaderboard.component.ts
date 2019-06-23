import { AppInfoRepository } from './../../../core/services/app-info.repository';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

import { SortDirection } from '@core/enums/sort.enums';

@Component({
  selector: 'app-fide-leaderboard',
  templateUrl: './fide-leaderboard.component.html',
  styleUrls: ['./fide-leaderboard.component.scss']
})
export class FideLeaderboardComponent implements OnInit {

  private uri = '/mapi/ChikiBambuki/FIDELeaderboard';

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

  constructor (private rep: AppInfoRepository) {}

  ngOnInit() {
    this.getData();
  }

  sortData($event: Sort) {
    this.sortEvent = $event;
    this.getData();
  }

  changePage($event: PageEvent) {
    this.pageEvent = $event;
    this.getData();
  }

  getData(): void {
    const sortColumn = this.sortEvent.active;
    const sortDirection = this.sortEvent.direction;
    const pageSize = this.pageEvent.pageSize;
    const page = this.pageEvent.pageIndex + 1;

    // const params = {
    //   method: 'GET',
    //   url: this.uri,
    //   params: {
    //     orderByField: sortColumn,
    //     orderDirection: sortDirection,
    //     pagesize: pageSize,
    //     page: page
    //   }
    // };

    // this.http.request(params.method, params.url, {
    //   params: params.params
    // })
    // .subscribe((data: any) => {
    //   console.log(data);
    //   if (!this.dataSource) {
    //     this.dataSource = new MatTableDataSource();
    //   }
    //   this.dataSource.data = data.elements;
    // });
    this.rep.getFIDETableList().subscribe(console.log);
  }
}
