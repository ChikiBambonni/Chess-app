import { Component, OnInit } from '@angular/core';

import { toolsMenuItems } from '@core/constants/nav-menu.constants';
import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { User } from '@core/interfaces/user.interfaces';
import { ToolsItem } from '@core/interfaces/nav-menu.interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  toolsItems: ToolsItem[] = toolsMenuItems;
  user: User = null;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  logoutClick() {
    this.authService.logout();
  }
}
