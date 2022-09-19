export type ModalAlertDataType = {
  title: string;
  content: string;
  alertType: AlertType;
  closeButtonLabel: string;
};

export class ModalAlertData {
  title?: string;
  content?: string;
  alertType?: AlertType;
  closeButtonLabel?: string;

  constructor(data?: ModalAlertDataType) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.alertType = data.alertType;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}

export enum AlertType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  DONE = 'done',
}

export type ModalConfirmDataType = {
  title: string;
  content: string;
  confirmButtonLabel: string;
  closeButtonLabel: string;
};

export class ModalConfirmData {
  title?: string;
  content?: string;
  confirmButtonLabel?: string;
  closeButtonLabel?: string;

  constructor(data?: ModalConfirmDataType) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.confirmButtonLabel = data.confirmButtonLabel;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}
