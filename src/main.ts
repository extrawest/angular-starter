import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import {
  HTTP_INTERCEPTORS,
  withInterceptorsFromDi,
  provideHttpClient,
  HttpClient,
} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './app/shared/layout/layout.component';
import { AuthGuard } from './app/core/guards/auth.guard';
import { mockResolverResolver } from './app/core/resolvers/mock-resolver.resolver';

if (environment.production) {
  enableProdMode();

  // Disable logs and warnings in production mode
  console.log = (): void => {};
  console.warn = (): void => {};
}

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const mainRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        resolve: {
          example: mockResolverResolver,
        },
        loadChildren: () =>
          import('./app/feature/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./app/feature/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./app/feature/register/register.module').then(
        (m) => m.RegisterModule,
      ),
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

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
      RouterModule.forRoot(mainRoutes),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
