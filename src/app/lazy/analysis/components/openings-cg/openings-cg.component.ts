import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import { CgMove } from '@core/interfaces/chess-move.interfaces';
import { calZoom } from '@core/utils/chess.utils';

@Component({
  selector: 'app-openings-cg',
  templateUrl: './openings-cg.component.html',
  styleUrls: ['./openings-cg.component.scss']
})
export class OpeningsCgComponent implements OnInit {

  zoom: number = calZoom(512);

  @Output()
  cgMove = new EventEmitter<CgMove>();

  @Input()
  fen: string;

  constructor() { }

  ngOnInit() {
  }

  onMove($event: CgMove) {
    this.cgMove.emit($event);
  }
}
