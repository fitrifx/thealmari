import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.page.html',
  styleUrls: ['./shirt.page.scss'],
})
export class ShirtPage implements OnInit {

  constructor() { }
  segment;
  ngOnInit() {
    this.segment = "male";
  }

}
