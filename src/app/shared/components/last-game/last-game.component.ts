import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { calZoom } from '@core/utils/chess.utils';

@Component({
  selector: 'app-last-game',
  templateUrl: './last-game.component.html',
  styleUrls: ['./last-game.component.scss']
})
export class LastGameComponent implements OnInit {

  zoom: number = calZoom(212);

  constructor() { }

  ngOnInit() {
  }

}
