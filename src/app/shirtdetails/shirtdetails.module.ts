import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtdetailsPageRoutingModule } from './shirtdetails-routing.module';

import { ShirtdetailsPage } from './shirtdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtdetailsPageRoutingModule
  ],
  declarations: [ShirtdetailsPage]
})
export class ShirtdetailsPageModule {}
