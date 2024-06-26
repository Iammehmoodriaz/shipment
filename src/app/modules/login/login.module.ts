import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/shared';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginModule { }
