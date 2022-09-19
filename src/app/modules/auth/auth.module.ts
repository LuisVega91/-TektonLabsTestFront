import { MaterialModule } from '../../common/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LoginComponent, LayoutComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
