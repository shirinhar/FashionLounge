import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DesignersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-designers',
  templateUrl: 'designers.html',
})
export class DesignersPage {

  designer: any;
  makers = ["Hussain Bazaza", "Shirin Harandi", "kill me nw"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.designer = navParams.get("section");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesignersPage');
  }

  designer_page() {
    // help
  }

}
