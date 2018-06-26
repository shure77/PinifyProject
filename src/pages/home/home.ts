import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Spots } from '../../spot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  spots: Spots = {
    name: '',
    description: '',
    website: '',
    spotType: ''
  }

  public nav: NavController; 
  constructor(public navCtrl: NavController, public NavParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToMap() {
    let data = {
      name: this.spots.name,
      description: this.spots.description,
      website: this.spots.website,
      spotType: this.spots.spotType
    }

    this.navCtrl.push(MapPage, data);
  }

  radioChangeHandler(answer){
    this.spots.spotType = answer;
  }

}
