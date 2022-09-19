import { defaultRoute } from '../../common/helpers/default-routes';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'create',
    component: FormComponent,
  },
  {
    path: 'edit/:id',
    component: FormComponent,
  },

  ...defaultRoute('list'),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresRoutingModule {}
