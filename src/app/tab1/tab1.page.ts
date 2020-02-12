import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides : true,  
    initialSlide: 1,
    speed: 300,
    autoPlay :true,
    loop :true,
  };

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }


}
