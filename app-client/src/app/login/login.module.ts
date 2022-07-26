import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
