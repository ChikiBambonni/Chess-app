import { Component, OnInit } from '@angular/core';

import { ButtonInterface } from '@shared/components/button-group/button-group.interfaces';
import { LiderboardType } from './components/leaderboard/leaderboard.enums';
import { ButtonsList } from './components/leaderboard/leaderboard.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  btnList: ButtonInterface<LiderboardType>[] = ButtonsList;
  selectedTab: LiderboardType = this.btnList[0].value;

  constructor() { }

  ngOnInit() {
  }

  changeTab($event: LiderboardType) {
    this.selectedTab = $event;
  }
}
