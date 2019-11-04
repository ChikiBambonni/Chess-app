import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ArrowEvents } from './mv-table-navigation.enums';
import { images } from './mv-table.constants';
import { JumpItem } from './mv-table-navigation.interfaces';

@Component({
  selector: 'app-mv-table-navigation',
  templateUrl: './mv-table-navigation.component.html',
  styleUrls: ['./mv-table-navigation.component.scss']
})
export class MvTableNavigationComponent implements OnInit {

  imgs: JumpItem[] = images;

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
