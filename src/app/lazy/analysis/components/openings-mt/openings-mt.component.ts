import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

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
  data: ChessMove[];

  @Input()
  m: string;

  @Output()
  changeArrow: EventEmitter<any> = new EventEmitter(); // TODO: provide interface here

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    this.changeArrow.emit($event);
  }
}
