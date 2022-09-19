import { ModalConfirmData } from './../types/modal.types';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../components/alert/alert.component';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { AlertType, ModalAlertData } from '../types/modal.types';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  private openAlertModal(message: string, alertType: AlertType, callBackFunction: Function) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: new ModalAlertData({
        title: alertType.toUpperCase(),
        content: message,
        closeButtonLabel: 'Close',
        alertType: alertType,
      }),
    });

    dialogRef.afterClosed().subscribe(() => callBackFunction());
  }

  openDoneModal(message: string, callBackFunction = (): any => {}) {
    this.openAlertModal(message, AlertType.DONE, callBackFunction);
  }

  openInfoModal(message: string, callBackFunction = (): any => {}) {
    this.openAlertModal(message, AlertType.INFO, callBackFunction);
  }

  openWarningModal(message: string, callBackFunction = (): any => {}) {
    this.openAlertModal(message, AlertType.WARNING, callBackFunction);
  }

  openErrorModal(message: string, callBackFunction = (): any => {}) {
    this.openAlertModal(message, AlertType.ERROR, callBackFunction);
  }

  openConfirmModal(message: string, callBackFunction: Function) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '300px',
      data: new ModalConfirmData({
        title: 'CONFIRM',
        content: message,
        confirmButtonLabel: 'Confirm',
        closeButtonLabel: 'Close',
      }),
    });

    dialogRef.afterClosed().subscribe((result) => callBackFunction(result));
  }
}
