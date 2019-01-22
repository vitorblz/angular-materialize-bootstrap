import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
