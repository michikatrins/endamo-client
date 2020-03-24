import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeClientePage } from './home-cliente.page';
import { ProductnamePipe } from 'src/app/pipes/productname.pipe';
import { ProductpricePipe } from 'src/app/pipes/productprice.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class HomeClientePageRoutingModule {}
