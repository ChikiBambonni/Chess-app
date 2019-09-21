import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mv-table-navigation',
  templateUrl: './mv-table-navigation.component.html',
  styleUrls: ['./mv-table-navigation.component.scss']
})
export class MvTableNavigationComponent implements OnInit {

  images = [
    'assets/images/icons/start.svg',
    'assets/images/icons/back.svg',
    'assets/images/icons/next.svg',
    'assets/images/icons/end.svg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
