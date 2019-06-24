import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { MaterialModule } from '@material/material.module';
import { notifierConfig } from '@core/constants/notifier.constants';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NotifierModule.withConfig(notifierConfig),
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
