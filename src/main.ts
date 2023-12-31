import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
  provideHttpClient,
  HttpClient,
  withInterceptors,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { errorInterceptorFn } from './app/core/interceptors/error.interceptor';
import { authInterceptorFn } from './app/core/interceptors/auth.interceptor';

if (environment.production) {
  enableProdMode();

  // Disable logs and warnings in production mode
  console.log = (): void => {};
  console.warn = (): void => {};
}

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([authInterceptorFn, errorInterceptorFn]),
    ),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
