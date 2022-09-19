import { MaterialModule } from '../../common/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [ListComponent, FormComponent, LayoutComponent],
  imports: [CommonModule, GenresRoutingModule, MaterialModule],
})
export class GenresModule {}
