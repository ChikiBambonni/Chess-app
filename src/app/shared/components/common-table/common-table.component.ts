import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output,
  ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Sort } from '@angular/material/sort';

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

  @Input()
  isLoadingResults: boolean;

  @Output()
  sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  @ViewChild('tableDiv')
  tableDiv: ElementRef;

  constructor () {}

  ngOnInit() {
  }

  sortData(sort: Sort) {
    this.sort.emit(sort);
  }
}
