import { AlertType, ModalAlertData } from './../../types/modal.types';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalAlertData) {}

  ngOnInit(): void {}

  getAlertIcon() {
    switch (this.data.alertType) {
      case AlertType.INFO:
        return 'info';
      case AlertType.WARNING:
        return 'warning';
      case AlertType.ERROR:
        return 'error';
      default:
        return undefined
    }
  }
}
