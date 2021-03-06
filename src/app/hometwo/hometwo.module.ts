import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometwoPageRoutingModule } from './hometwo-routing.module';

import { HometwoPage } from './hometwo.page';
import { SharedModule } from '../shared/shared.module';
//import { HideheaderDirective } from '../directives/hideheader.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometwoPageRoutingModule,
    SharedModule
  ],
  declarations: [HometwoPage]
})
export class HometwoPageModule {}
