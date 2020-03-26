import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEnterprisePageRoutingModule } from './edit-enterprise-routing.module';

import { EditEnterprisePage } from './edit-enterprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEnterprisePageRoutingModule
  ],
  declarations: [EditEnterprisePage]
})
export class EditEnterprisePageModule {}
