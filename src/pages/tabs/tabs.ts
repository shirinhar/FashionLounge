import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { AddPage }  from '../add/add';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  searchRoot: any;
  homeRoot: any;
  addRoot: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homeRoot = HomePage;
    this.searchRoot = SearchPage;
    this.addRoot = AddPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
