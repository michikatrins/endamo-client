import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClientePageRoutingModule } from './home-cliente-routing.module';

import { HomeClientePage } from './home-cliente.page';
import { ProductnamePipe } from 'src/app/pipes/productname.pipe';
import { ProductpricePipe } from 'src/app/pipes/productprice.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientePageRoutingModule
  ],
  declarations: [HomeClientePage,ProductnamePipe,ProductpricePipe]
})
export class HomeClientePageModule {}
