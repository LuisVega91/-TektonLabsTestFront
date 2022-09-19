import { ClientGuard } from './common/guards/client.guard';
import { AdminGuard } from './common/guards/admin.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { defaultRoute } from './common/helpers/default-routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'clients',
    canActivate: [AuthenticatedGuard, ClientGuard],
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'admins',
    canActivate: [AuthenticatedGuard, AdminGuard],
    loadChildren: () =>
      import('./modules/admins/admins.module').then((m) => m.AdminsModule),
  },
  ...defaultRoute('auth/login'),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
