import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const MOCK_TOKEN = 'test';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept<T = unknown>(
    request: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    const authHeader = `Bearer ${MOCK_TOKEN}`;

    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: authHeader,
          Accept: 'application/json, text/plain, */*',
        },
      }),
    );
  }
}
