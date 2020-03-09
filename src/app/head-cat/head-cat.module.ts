import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadCatPageRoutingModule } from './head-cat-routing.module';

import { HeadCatPage } from './head-cat.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadCatPageRoutingModule,
    SharedModule
  ],
  declarations: [HeadCatPage]
})
export class HeadCatPageModule {}
