import { Component, OnInit, Input } from '@angular/core';

import { calZoom } from '@core/utils/chess.utils';

@Component({
  selector: 'app-openings-cg',
  templateUrl: './openings-cg.component.html',
  styleUrls: ['./openings-cg.component.scss']
})
export class OpeningsCgComponent implements OnInit {

  zoom: number = calZoom(512);

  @Input()
  fen: string;

  constructor() { }

  ngOnInit() {
  }
}
