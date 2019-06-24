import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChessGameComponent } from './chess-game.component';

const routes: Routes = [
  {
    path: '',
    component: ChessGameComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChessGameRoutingModule { }
