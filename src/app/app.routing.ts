import { AnalysisComponent } from './core/components/analysis/analysis.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ChessGameComponent } from '@core/components/chess-game/chess-game.component';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { LoginComponent } from '@core/components/login/login.component';
import { HomeComponent } from '@core/components/home/home.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService]
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'chess', component: ChessGameComponent, canActivate: [AuthGuardService]
  }, {
    path: 'opening#explorer', component: AnalysisComponent
  }, {
    path: '404', component: NotFoundComponent
  }, {
    path: '**', redirectTo: '/404'
  }
];

export const routing = RouterModule.forRoot(routes);
