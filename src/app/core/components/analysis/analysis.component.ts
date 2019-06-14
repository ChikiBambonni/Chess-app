import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

export interface TableRow {
  n: string;
}

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['n'];
  data: MatTableDataSource<TableRow>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private httpClient: HttpClient) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          console.log(this.sort.active, this.sort.direction, this.paginator.pageIndex);
          return this.httpClient.get('/capi/ChikiBambuki/Openings?sort=n');
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
        // this.data = data
        this.data = new MatTableDataSource<TableRow>(data);
        this.data.paginator = this.paginator;
      });
  }
}
