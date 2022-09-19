import { MaterialModule } from '../../common/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule, GenresRoutingModule, MaterialModule],
})
export class GenresModule {}
