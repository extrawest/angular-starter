import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

enum Notifications {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  errorNotification(message: string, header?: string): void {
    this.messageService.add({
      severity: 'error',
      summary: header,
      detail: message,
    });

    this.notificationLogger(message, header, Notifications.ERROR);
  }

  successNotification(message: string, header?: string): void {
    this.messageService.add({
      severity: 'success',
      summary: header,
      detail: message,
    });

    this.notificationLogger(message, header);
  }

  infoNotification(message: string, header?: string): void {
    this.messageService.add({
      severity: 'info',
      summary: header,
      detail: message,
    });

    this.notificationLogger(message, header);
  }

  warnNotification(message: string, header?: string): void {
    this.messageService.add({
      severity: 'warn',
      summary: header,
      detail: message,
    });

    this.notificationLogger(message, header, Notifications.WARN);
  }

  private notificationLogger(
    message: string,
    header?: string,
    logType: Notifications = Notifications.INFO,
  ): void {
    const textContent: string = `
${new Date()}
Message: ${message}.
${header ? `header: ${header}` : ''}`;

    switch (logType) {
      case Notifications.ERROR: {
        console.error(textContent);

        break;
      }

      case Notifications.WARN: {
        console.warn(textContent);

        break;
      }

      case Notifications.INFO: {
        console.log(textContent);

        break;
      }

      default: {
        console.log(textContent);
      }
    }
  }
}
