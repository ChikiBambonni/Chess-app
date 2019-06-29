import { Component, OnInit } from '@angular/core';

import { UserService } from '@core/mock-backend/services/user.service';
import { User } from '@core/interfaces/user.interfaces';
import { ButtonInterface } from '@shared/components/button-group/button-group.interfaces';
import { LiderboardType } from './components/leaderboard/leaderboard.enums';
import { ButtonsList } from './components/leaderboard/leaderboard.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = null;

  onlineFriends = [{
    status: 'online',
    title: 'friend 1'
  }, {
    status: 'online',
    title: 'friend 2'
  }, {
    status: 'online',
    title: 'friend 3'
  }, {
    status: 'online',
    title: 'friend 5'
  }];

  offlineFriends = [{
    status: 'offline',
    title: 'friend 7'
  }, {
    status: 'offline',
    title: 'friend 8'
  }, {
    status: 'offline',
    title: 'friend 9'
  }, {
    status: 'offline',
    title: 'friend 15'
  }];

  btnList: ButtonInterface<LiderboardType>[] = ButtonsList;
  selectedTab: LiderboardType = this.btnList[0].value;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  changeTab($event: LiderboardType) {
    this.selectedTab = $event;
  }
}
