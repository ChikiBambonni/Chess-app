import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./lazy/home/home.module').then(mod => mod.HomeModule),
    canActivate: [AuthGuardService]
  }, {
    path: 'login',
    loadChildren: () => import('./lazy/login/login.module').then(mod => mod.LoginModule),
  }, {
    path: 'chess',
    loadChildren: () => import('./lazy/chess-game/chess-game.module').then(mod => mod.ChessGameModule),
    canActivate: [AuthGuardService]
  }, {
    path: 'opening#explorer',
    loadChildren: () => import('./lazy/analysis/analysis.module').then(mod => mod.AnalysisModule),
    canActivate: [AuthGuardService]
  }, {
    path: '404',
    loadChildren: () => import('./lazy/not-found/not-found.module').then(mod => mod.NotFoundModule),
  }, {
    path: '**', redirectTo: '/404'
  }
];

export const routing = RouterModule.forRoot(routes);
