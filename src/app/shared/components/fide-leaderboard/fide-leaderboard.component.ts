import { HttpClient } from '@angular/common/http';
import { SortDirection } from '@core/enums/sort.enums';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Sort } from '@angular/material/sort';
import { FIDETableElement } from '@core/mock-backend/mocks/liderboard/liderboard.interfaces';
import { PaginationInterface } from '@core/interfaces/pagination.interface';
import { Observable } from 'rxjs';

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

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data.elements;
    });
  }

  sortData($event: Sort) {
    this.sortEvent = $event;
    this.getData().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data.elements;
    });
  }

  changePage($event: PageEvent) {
    this.pageEvent = $event;
    this.getData().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data.elements;
    });
  }

  getData(): Observable<any> {
    const sortColumn = this.sortEvent.active;
    const sortDirection = this.sortEvent.direction === SortDirection.Asc ? 1 : -1;
    const pageSize = this.pageEvent.pageSize;
    const page = this.pageEvent.pageIndex + 1;
    return this.http.get(`${this.uri}?sort={"${sortColumn}": ${sortDirection}}&pagesize=${pageSize}$page=${page}`);
  }
}
