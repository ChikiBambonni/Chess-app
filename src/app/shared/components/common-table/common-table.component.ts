import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output } from '@angular/core';
import { MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input()
  displayedColumns: string[];

  @Input()
  dataSource: MatTableDataSource<any>;

  @Output()
  sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor () {}

  ngOnInit() {
  }

  sortData(sort: Sort) {
    this.sort.emit(sort);
  }
}