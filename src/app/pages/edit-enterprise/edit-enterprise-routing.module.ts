import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEnterprisePage } from './edit-enterprise.page';

const routes: Routes = [
  {
    path: '',
    component: EditEnterprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEnterprisePageRoutingModule {}
