import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { NotifierModule } from 'angular-notifier';




import { ErrorInterceptor } from '@core/mock-backend/interceptors/error.interceptor';
import { JwtInterceptor } from '@core/mock-backend/interceptors/jwt.interceptor';
import { fakeBackendProvider } from '@core/mock-backend/interceptors/auth.interceptor';

import { MessageService } from '@core/services/message/message.service';
import { ChatService } from '@core/services/chat/chat.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { WebsocketService } from '@core/services/websocket/websocket.service';
import { notifierConfig } from '@core/constants/notifier.constants';
import { GameSelectionService } from '@core/services/game-selection/game-selection.service';
import { ChessGameService } from '@core/services/chess-game/chess-game.service';


import { FindGameDialogComponent } from '@core/material-dialogs/find-game-dialog/find-game-dialog.component';
import { MaterialModule } from '@material/material.module';


import { MockDataInterceptor } from './mock-backend/mock-data.interceptor';
import { MockBackendService } from './mock-backend/mock-backend.service';
import { MockBackendConfig } from './mock-backend/mock-backend-config.constant';
import { AppInfoRepository } from './services/app-info.repository';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    MaterialModule
  ],
  exports: [
  ],
  declarations: [
    FindGameDialogComponent,
  ],
  entryComponents: [
    FindGameDialogComponent
  ],
  providers: [
    ChatService,
    MessageService,
    WebsocketService,
    GameSelectionService,
    ChessGameService,
    UserService,
    AuthenticationService,
    MockBackendService,
    AppInfoRepository,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MockDataInterceptor, multi: true },
    fakeBackendProvider
  ]
})
export class CoreModule {
  constructor(private mockBackendService: MockBackendService) {
    MockBackendService.initConfig(MockBackendConfig);
    this.mockBackendService.initGlobalMethods();
  }
}
