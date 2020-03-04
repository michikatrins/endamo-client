import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeProductosPageRoutingModule } from './me-productos-routing.module';

import { MeProductosPage } from './me-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeProductosPageRoutingModule
  ],
  declarations: [MeProductosPage]
})
export class MeProductosPageModule {}
