import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./feature/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./feature/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./feature/register/register.module').then(
        (m) => m.RegisterModule,
      ),
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
