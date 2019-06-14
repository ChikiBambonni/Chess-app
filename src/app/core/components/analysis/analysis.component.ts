import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

export interface TableRow {
  c: string;
  n: string;
}

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['c', 'n'];
  data: MatTableDataSource<TableRow>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private castSort(sort: string) {
    return sort === 'desc' ? -1 : 1;
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          const sortColumn = this.sort.active;
          const sortDirection = this.castSort(this.sort.direction);
          const pageNumber = this.paginator.pageIndex + 1;

          return this.httpClient.get(`/capi/ChikiBambuki/Openings?sort={"${sortColumn}": ${sortDirection}}&page=${pageNumber}`);
        }),
        map((data: any) => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data._returned;

          return data._embedded;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => {
        this.data = new MatTableDataSource<TableRow>(data);
        this.data.paginator = this.paginator;
      });
  }
}
