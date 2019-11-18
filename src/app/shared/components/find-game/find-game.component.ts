import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FindGameDialogComponent } from '@core/material-dialogs/find-game-dialog/find-game-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-find-game',
  templateUrl: './find-game.component.html',
  styleUrls: ['./find-game.component.scss']
})
export class FindGameComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  findGameClick() {
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(FindGameDialogComponent, {
      width: '250px'
    });
  }
}
