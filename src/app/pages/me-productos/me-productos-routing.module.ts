import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeProductosPage } from './me-productos.page';

const routes: Routes = [
  {
    path: '',
    component: MeProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeProductosPageRoutingModule {}
