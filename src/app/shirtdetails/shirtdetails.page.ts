import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-shirtdetails',
  templateUrl: './shirtdetails.page.html',
  styleUrls: ['./shirtdetails.page.scss'],
})
export class ShirtdetailsPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoPlay : true,
    pager : true
  };

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  constructor() { }

  ngOnInit() {
  }

}
