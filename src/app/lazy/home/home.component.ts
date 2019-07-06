import { Component, OnInit } from '@angular/core';

import { AppInfoRepository } from '@core/services/app-info.repository';
import { ButtonInterface } from '@shared/components/button-group/button-group.interfaces';
import { LiderboardType } from './components/leaderboard/leaderboard.enums';
import { ButtonsList } from './components/leaderboard/leaderboard.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  onlineFriends;
  offlineFriends;

  btnList: ButtonInterface<LiderboardType>[] = ButtonsList;
  selectedTab: LiderboardType = this.btnList[0].value;

  constructor(private repo: AppInfoRepository) { }

  ngOnInit() {
    this.repo.getFriendsList().subscribe(data => {
      this.offlineFriends = data.filter(e => e.status === 'offline');
      this.onlineFriends = data.filter(e => e.status === 'online');
    });
  }

  changeTab($event: LiderboardType) {
    this.selectedTab = $event;
  }
}
