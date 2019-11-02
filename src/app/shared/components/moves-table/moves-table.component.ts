import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-moves-table',
  templateUrl: './moves-table.component.html',
  styleUrls: ['./moves-table.component.scss']
})
export class MovesTableComponent implements OnInit {
  displayedColumns = ['N', 'white', 'black'];

  @ViewChild('scrollBottom')
  private tableContainer: ElementRef;

  @Input()
  data: ChessMove[];

  @Input()
  selectedCellValue: any;

  constructor() { }

  ngOnInit() {

  }

  onRowClick($event) {
    console.log($event);
  }
}
