import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    {
      "nome":"Skirt 1",
      "imagem" : "../assets/skirt1.jpg",
      "price" : "Rm 20.50"
    },
    {
      "nome":"Skirt 2",
      "imagem" : "../assets/skirt4.jpg",
      "price" : "Rm 19.50"
    },
    {
      "nome":"Skirt 3",
      "imagem" : "../assets/skirt3.jpg",
      "price" : "Rm 30.50"
    },
    {
      "nome":"Skirt 4",
      "imagem" : "../assets/skirt3.jpg",
      "price" : "Rm 20.00"
    },
    {
      "nome":"Skirt 5",
      "imagem" : "../assets/skirt3.jpg",
      "price" : "Rm 12.50"
    },
    {
      "nome":"Skirt 5",
      "imagem" : "../assets/skirt4.jpg",
      "price" : "Rm 6.50"
    }
  ];
}
