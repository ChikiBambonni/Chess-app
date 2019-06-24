import { AppUserService } from './app-user.service';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { userProviderFactory } from './app-user-provider.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
