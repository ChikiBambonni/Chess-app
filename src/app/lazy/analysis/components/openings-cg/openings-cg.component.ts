import { Component, OnInit } from '@angular/core';

import { calZoom } from '@core/utils/chess.utils';

@Component({
  selector: 'app-openings-cg',
  templateUrl: './openings-cg.component.html',
  styleUrls: ['./openings-cg.component.scss']
})
export class OpeningsCgComponent implements OnInit {

  zoom: number = calZoom(512);
  fen: string = null;

  constructor() { }

  ngOnInit() {
  }

  rowClick(row) {
    this.fen = row.f;
  }
}
