import { Directive, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideheader]',
  host : {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideheaderDirective {

  @Input('header') header: any;
  private lastY : number =0;

  constructor( private renderer : Renderer2 , private domCtrl : DomController) { }

  ngOnInit(){
    this.header = this.header.el;
    this.domCtrl.write(()=>{
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');
    });
    

  }


  lastX : any; 
  onContentScroll(event:any){
    if(event.detail.scrollTop > this.lastY){

      this.renderer.setStyle(this.header,'margin-top', `-${this.header.clientHeight}px`);//kalau ' guna macam biasa, bila nak use element guna `

    }
    else{
      this.renderer.setStyle(this.header,'margin-top', '0');
    }

    this.lastY = event.detail.scrollTop;
    }

}
