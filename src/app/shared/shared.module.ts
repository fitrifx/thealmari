import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideheaderDirective } from '../directives/hideheader.directive';



@NgModule({
  declarations: [HideheaderDirective],
  imports: [
    CommonModule
  ],
  exports : [ HideheaderDirective]
})
export class SharedModule { }
