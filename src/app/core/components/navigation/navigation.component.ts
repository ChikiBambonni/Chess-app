import { Component, OnInit } from '@angular/core';

import { gameMenuItems, toolsMenuItems } from '@core/constants/nav-menu.constants';
import { GameSelectionService } from '@core/services/game-selection/game-selection.service';
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
  menuItems: string[] = gameMenuItems;
  toolsItems: ToolsItem[] = toolsMenuItems;
  user: User = null;

  constructor(
    private gameService: GameSelectionService,
    private authService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  gameMenuClick(gameType: string) {
    this.gameService.changeGame(gameType);
  }

  toolsMenuClick(tool: string) {
    console.log(tool);
  }

  logoutHandler() {
    this.authService.logout();
  }
}
