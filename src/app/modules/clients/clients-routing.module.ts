import { defaultRoute } from './../../common/helpers/default-routes';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'genres',
        loadChildren: () =>
          import('../genres/genres.module').then((m) => m.GenresModule),
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
export class ClientsRoutingModule {}
