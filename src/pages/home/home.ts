import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nav: NavController; 
  constructor(public navCtrl: NavController, public NavParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToMap() {
    this.navCtrl.push(MapPage);
  }

}
