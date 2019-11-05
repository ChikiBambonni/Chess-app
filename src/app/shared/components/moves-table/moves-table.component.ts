import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

import { TableSelectedCell } from '../common-table/common-table.interfaces';
import { MovesTableItem } from './moves-table.constants';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovesTableComponent implements OnInit {
  displayedColumns = ['N', 'white', 'black'];

  @Input()
  data: MovesTableItem[];

  @Input()
  selectedCellValue: TableSelectedCell;

  constructor() { }

  ngOnInit() {

  }

  onRowClick($event) {
    console.log($event);
  }
}
