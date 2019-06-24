import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindGameComponent } from './find-game.component';

const routes: Routes = [
  {
    path: '',
    component: FindGameComponent
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
export class FindGameRoutingModule { }
