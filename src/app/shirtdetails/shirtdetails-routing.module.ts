import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtdetailsPage } from './shirtdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtdetailsPageRoutingModule {}
