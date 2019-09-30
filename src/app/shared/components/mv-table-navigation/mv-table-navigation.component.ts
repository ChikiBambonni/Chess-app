import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IChessEvent } from '@core/interfaces/chess-events.interfaces';
import { ArrowEvents } from '@core/enums/chess-events.enumn';
import { images } from './mv-table.constants';

@Component({
  selector: 'app-mv-table-navigation',
  templateUrl: './mv-table-navigation.component.html',
  styleUrls: ['./mv-table-navigation.component.scss']
})
export class MvTableNavigationComponent implements OnInit {

  imgs: IChessEvent[] = images;

  @Output()
  changeEvent: EventEmitter<{ type: ArrowEvents }> = new EventEmitter<{ type: ArrowEvents }>();

  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    this.changeEvent.emit({ type: this.getType($event.src) });
  }

  getType(src: string): ArrowEvents {
    return this.imgs.filter(i => i.uri === src)[0].type;
  }
}
