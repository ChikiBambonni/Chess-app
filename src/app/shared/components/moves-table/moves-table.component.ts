import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

import { ChessMove } from '@core/interfaces/chess.interfaces';
import { TableSelectedCell } from '../common-table/common-table.interfaces';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovesTableComponent implements OnInit {
  displayedColumns = ['N', 'white', 'black'];

  @Input()
  data: ChessMove[];

  @Input()
  selectedCellValue: TableSelectedCell;

  constructor() { }

  ngOnInit() {

  }

  onRowClick($event) {
    console.log($event);
  }
}
