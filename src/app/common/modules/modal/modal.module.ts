import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [AlertComponent, ConfirmComponent],
  exports: [AlertComponent, ConfirmComponent],
  entryComponents: [AlertComponent, ConfirmComponent],
  imports: [CommonModule, MaterialModule],
})
export class ModalModule {}
