import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorydetailsPageRoutingModule } from './categorydetails-routing.module';

import { CategorydetailsPage } from './categorydetails.page';
//import { HideheaderDirective } from '../directives/hideheader.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorydetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [CategorydetailsPage, ]
})
export class CategorydetailsPageModule {}
