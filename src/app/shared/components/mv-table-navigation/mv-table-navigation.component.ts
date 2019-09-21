import { Component, OnInit } from '@angular/core';

import { ArrowEvents } from '@core/enums/chess-events.enumn';

@Component({
  selector: 'app-mv-table-navigation',
  templateUrl: './mv-table-navigation.component.html',
  styleUrls: ['./mv-table-navigation.component.scss']
})
export class MvTableNavigationComponent implements OnInit {

  images = [
    {
      uri: 'assets/images/icons/start.svg',
      type: ArrowEvents.First
    }, {
      uri: 'assets/images/icons/back.svg',
      type: ArrowEvents.Prev
    }, {
      uri: 'assets/images/icons/next.svg',
      type: ArrowEvents.Next
    }, {
      uri: 'assets/images/icons/end.svg',
      type: ArrowEvents.Last
    }];

  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    console.log('clicked', this.images.filter(i => i.uri === $event.src)[0].type);
  }
}
