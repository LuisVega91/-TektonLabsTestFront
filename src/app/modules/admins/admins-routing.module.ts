import { defaultRoute } from './../../common/helpers/default-routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'genres',
        loadChildren: () =>
          import('../genres/genres.module').then((m) => m.GenresModule),
      },
      {
        path:'songs',
        loadChildren: () =>
          import('../songs/songs.module').then((m) => m.SongsModule),
      },
      {
        path:'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      ...defaultRoute('genres/list'),
    ],
  },
  ...defaultRoute('genres/list'),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
