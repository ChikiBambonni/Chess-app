import { Component, OnInit } from '@angular/core';

import { images } from './mv-table.constants';

@Component({
  selector: 'app-mv-table-navigation',
  templateUrl: './mv-table-navigation.component.html',
  styleUrls: ['./mv-table-navigation.component.scss']
})
export class MvTableNavigationComponent implements OnInit {

  imgs = images;

  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    // console.log('clicked', this.images.filter(i => i.uri === $event.src)[0].type);
  }
}
