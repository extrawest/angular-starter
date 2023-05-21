import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { AppInjector } from '../../app.component';

export const errorInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const notification: NotificationService =
    AppInjector.get(NotificationService);

  return next(req).pipe(
    tap({
      error: (error: unknown) => {
        if (!(error instanceof HttpErrorResponse)) {
          return;
        }

        notification.errorNotification(error.message, error.status.toString());
      },
    }),
  );
};
