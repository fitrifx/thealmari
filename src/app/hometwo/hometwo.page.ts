import { Component, OnInit } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.page.html',
  styleUrls: ['./hometwo.page.scss'],
})
export class HometwoPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoPlay : true,
    pager : true
  };

  slideOptsTwo ={

  
    leftSlides: true,
    slidesPerView: 2.6,
    spaceBetween : 8,
  }


  roundSlide = {
    leftSlides :true,
    slidesPerView : 3.7,
    spaceBetween : 0
  }


  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }


  constructor() { }

  ngOnInit() {
  }

}
