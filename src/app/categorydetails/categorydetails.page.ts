import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.page.html',
  styleUrls: ['./categorydetails.page.scss'],
})
export class CategorydetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoPlay : true,
    pager : true
  };

  slideOptsTwo = {
    initialSlide : 0,
    leftSlide : true,
    slidesPerView : 3.2
    }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }


}
