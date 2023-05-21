import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const MOCK_TOKEN = 'test';

export const authInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const authHeader = `Bearer ${MOCK_TOKEN}`;

  if (!authHeader?.length) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: {
        Authorization: authHeader,
        Accept: 'application/json, text/plain, */*',
      },
    }),
  );
};
