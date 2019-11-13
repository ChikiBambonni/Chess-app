import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { TableSelectedCell } from '@shared/components/common-table/common-table.interfaces';
import { MovesTableItem } from '@shared/components/moves-table/moves-table.interfaces';
import { PGN } from '@core/interfaces/chess.interfaces';

@Component({
  selector: 'app-openings-mt',
  templateUrl: './openings-mt.component.html',
  styleUrls: ['./openings-mt.component.scss']
})
export class OpeningsMtComponent implements OnInit {

  min = -20;
  max = 20;

  @Input()
  score: number;

  @Input()
  data: MovesTableItem[];

  @Input()
  selectedCellValue: TableSelectedCell;

  @Output()
  changeArrow: EventEmitter<any> = new EventEmitter(); // TODO: provide interface here

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    this.changeArrow.emit($event);
  }
}
