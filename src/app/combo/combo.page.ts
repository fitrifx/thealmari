import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.page.html',
  styleUrls: ['./combo.page.scss'],
})
export class ComboPage implements OnInit {

  roundSlide = {
    leftSlides :true,
    slidesPerView : 3.7,
    spaceBetween : 0
  }

  constructor() { }

  ngOnInit() {
  }

}
