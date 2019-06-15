import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
