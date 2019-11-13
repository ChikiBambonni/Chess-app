import { Component, OnInit } from '@angular/core';

import { AppInfoRepository } from '@core/services/app-info.repository';

@Component({
  selector: 'app-friend-list-card',
  templateUrl: './friend-list-card.component.html',
  styleUrls: ['./friend-list-card.component.scss']
})
export class FriendListCardComponent implements OnInit {

  onlineFriends; // TODO: define interface
  offlineFriends;

  constructor(private repo: AppInfoRepository) { }

  ngOnInit() {
    this.repo.getFriendsList().subscribe(data => {
      this.offlineFriends = data.filter(e => e.status === 'offline');
      this.onlineFriends = data.filter(e => e.status === 'online');
    });
  }
}
