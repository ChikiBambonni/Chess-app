import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppUserService } from './app-user.service';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { userProviderFactory } from './app-user-provider.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    CoreModule
  ],
  providers: [
    AppUserService,
    {
      provide: APP_INITIALIZER,
      useFactory: userProviderFactory,
      deps: [ AppUserService ],
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
