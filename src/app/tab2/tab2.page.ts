import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  constructor(private toastController: ToastController) {}
  segment;

  segmentChanged(event) {}

  async toast() {
    const toast = await this.toastController
      .create({
        message: "The item has been added to your wishlist!",
        duration: 2000,
        color: "primary ",
        cssClass: 'toastCss',
        closeButtonText : 'Okay'
      })
      .then(obj => {
        obj.present();
      });
  }

  toastOnce() {
    this.toastController
      .dismiss()
      .then(obj => {})
      .catch(() => {})
      .finally(() => {
        this.toast();
      });
  }

  ngOnInit() {
    this.segment = "feed";
  }
}
