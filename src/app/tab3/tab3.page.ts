import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  // imageList = []; //create array list named imageList
  // nextPage = "https://picsum.photos/v2/list?page=1"; //load Image from the server

  constructor() {
    
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
