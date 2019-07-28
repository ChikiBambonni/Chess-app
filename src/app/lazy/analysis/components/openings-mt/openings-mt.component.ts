import { Component, OnInit, Input } from '@angular/core';

import { ChessMove } from '@core/interfaces/chess-move.interfaces';

@Component({
  selector: 'app-openings-mt',
  templateUrl: './openings-mt.component.html',
  styleUrls: ['./openings-mt.component.scss']
})
export class OpeningsMtComponent implements OnInit {

  @Input()
  data: ChessMove[];

  constructor() { }

  ngOnInit() {
  }

}
