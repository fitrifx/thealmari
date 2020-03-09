import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadCatPage } from './head-cat.page';

const routes: Routes = [
  {
    path: '',
    component: HeadCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadCatPageRoutingModule {}
