import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometwoPageRoutingModule } from './hometwo-routing.module';

import { HometwoPage } from './hometwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometwoPageRoutingModule
  ],
  declarations: [HometwoPage]
})
export class HometwoPageModule {}
