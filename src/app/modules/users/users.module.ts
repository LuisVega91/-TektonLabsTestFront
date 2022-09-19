import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
