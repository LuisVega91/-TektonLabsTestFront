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
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'admins',
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
