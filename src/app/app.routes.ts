import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { mockResolverResolver } from './core/resolvers/mock-resolver.resolver';

export const appRoutes: Routes = [
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
          import('./feature/dashboard/dashboard.routes').then(
            (m) => m.dashboardRoutes,
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./feature/login/login.routes').then((m) => m.loginRoutes),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./feature/register/register.routes').then(
        (m) => m.registerRoutes,
      ),
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
